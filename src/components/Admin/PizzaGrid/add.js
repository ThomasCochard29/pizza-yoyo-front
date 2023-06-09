import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data"

// CSS
import "../../../App.css";
import "../admin.css"

const AddPizza = () => {

    const [categories, setCategories] = useState([]);
    const [inputs, setInputs] = useState(
        {
            nom: "",
            description: "",
            prix: "",
            image: "",
            image_descrip: "",
            categorie_id: "",
        }
    );
    const [err, setErr] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:8800/api/categories/find");
          setCategories(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
    };

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClear = () => {
        const inputFields = document.querySelectorAll("input");

        // Effacer le contenu de chaque input
        inputFields.forEach(() => {
            setInputs(
                {
                    nom: "",
                    description: "",
                    prix: "",
                    image: "",
                    image_descrip: "",
                    categorie_id: "",
                }
            );
        });
        
        toast.success("Formulaire Clear", {
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

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", selectedFile);

        for (const [key, value] of Object.entries(inputs)) {
            formData.append(key, value);
        }

        try {
            await axios.post("http://localhost:8800/api/pizzas/add", formData);
            toast.success("Pizza ajoutée !", {
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
            toast.error("Erreur : Pizza non ajoutée !", {
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
    };

    return (
        <div className="form-contact">
            <div className="form-contact-gray">
                <p>Ajout Pizza</p>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input type="text" name="nom" id="" placeholder="Nom" value={inputs.nom} onChange={handleChange}/>
                    </div>
                    <div className="user-box">
                        <input type="text" name="description" id="" placeholder="Description" value={inputs.description} onChange={handleChange}/>
                    </div>
                    <div className="user-box">
                        <input type="text" name="prix" id="" placeholder="Prix" value={inputs.prix} onChange={handleChange}/>
                    </div>
                    <div className="user-box">
                        <input type="file" name="image" id="" placeholder="Image" onChange={handleFileChange}/>
                    </div>
                    <div className="user-box">
                        <input type="text" name="image_descrip" id="" placeholder="Description Image" value={inputs.image_descrip} onChange={handleChange}/>
                    </div>
                    <div className="user-box">
                        <select
                            className="select-categ"
                            name="categorie_id"
                            id=""
                            value={inputs.categorie_id}
                            onChange={handleChange}
                        >
                        <option value="">Sélectionner une base</option>
                        {categories.map((category) => (
                            <option className="option-categ" key={category.id} value={category.id}>
                                {category.base}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="div-btn">
                        <button href="#" type="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Ajouter
                        </button>

                        <button href="#" type="button" onClick={handleClear}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Clear
                        </button>

                        <Link to="/admin/pizzagrid" className="btn-back">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Back to DataGrid
                        </Link>
                    </div>    
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default AddPizza;