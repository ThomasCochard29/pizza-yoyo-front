import React, { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../../../App.css";
import "../admin.css"

const AddCategorie = () => {

    const handleClear = () => {
        const inputs = document.querySelectorAll("input");

        // Effacer le contenu de chaque input
        inputs.forEach((input) => {
            input.value = "";
        });
    }

    const [inputs, setInputs] = useState(
        {
            base: ""
        }
    );
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()

        console.log(inputs);
    
        try {
            await axios.post("http://localhost:8800/api/categories/add", inputs);
            toast.success("Categorie Ajouté !", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                bodyClassName: "toastify-content",
            });
        } catch (err) {
            setErr(err.response?.data);
            toast.error("Erreur Categorie Non Ajouté !", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                bodyClassName: "toastify-content",
            });
        }
    }

    return (
        <div className="form-contact">
            <div className="form-contact-gray">
                <p>Ajout Pizza</p>
                <form>
                    <div className="user-box">
                        <input type="text" name="base" id="" placeholder="Base" onChange={handleChange}/>
                    </div>
                    <div className="div-btn">
                        <button href="#" onClick={handleClick} className="btn-add">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Ajouter
                        </button>

                        <button href="#" onClick={handleClear}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Clear
                        </button>

                        <Link to="/admin/categoriegrid" className="link-btn-back">
                            <button href="#" className="btn-back">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Back To Datagrid
                            </button>
                        </Link>
                    </div>    
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default AddCategorie;