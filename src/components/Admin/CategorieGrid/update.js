import React, { useState, useContext, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../../../App.css";
import "../admin.css"

const UpdateCategorie = () => {

    const { id } = useParams();

    const handleClear = (e) => {
        e.preventDefault()

        const inputs = document.querySelectorAll("input");

        // Effacer le contenu de chaque input
        inputs.forEach((input) => {
            input.value = "";
        });
    }

    const [inputs, setInputs] = useState(
        {
            base: "",
            id: ""
        }
    );
    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    useEffect(() => { 
        axios.get(`http://localhost:8800/api/categories/findid/${id}`)
        .then(res => setInputs(prevInputs => ({ ...prevInputs, base: res.data[0].base, id: res.data[0].id })))
        .catch(err => console.log(err));
    }, [])

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    };


    // console.log(inputs);

    const handleClick = async e => {
        e.preventDefault()

        console.log(inputs);
    
        try {
            await axios.put(`http://localhost:8800/api/categories/update/` + id , inputs)
            .then(res =>
                toast.success("Categorie Update !", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    bodyClassName: "toastify-content",
                }),
                // navigate('/admin/categoriegrid')
            )
            .catch(err => console.log(err))
        } catch (err) {
            setErr(err.response?.data);
            toast.error("Erreur Categorie Non Update !", {
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
                <p>Update Categorie id: {inputs.id}</p>
                <form>
                    <div className="user-box">
                        <input type="text" name="base" id="" placeholder={inputs.base} onChange={handleChange}/>
                    </div>
                    <div className="div-btn">
                        <button href="#" onClick={handleClick} className="btn-add">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Update
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

export default UpdateCategorie;