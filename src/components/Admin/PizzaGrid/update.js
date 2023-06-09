import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "form-data";

// CSS
import "../../../App.css";
import "../admin.css";

const UpdatePizza = () => {

  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState({
    nom: "",
    description: "",
    prix: "",
    image: null,
    image_descrip: "",
    categorie_id: "",
  });
  const [err, setErr] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [originalFile, setOriginalFile] = useState(null);
  const [currentImageName, setCurrentImageName] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchPizza();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/api/categories/find"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPizza = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/api/pizzas/findid/${id}`
      );
      const pizza = response.data[0];
      // console.log(response.data);
      setInputs({
        nom: pizza.nom,
        description: pizza.description,
        prix: pizza.prix,
        image_descrip: pizza.image_descrip,
        categorie_id: pizza.categorie_id,
      });
      setOriginalFile(pizza.image)
      setCurrentImageName(pizza.image.split("/uploads/").pop());
    } catch (error) {
      console.error("Error fetching pizza:", error);
    }
  };

  // console.log(originalFile);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClear = () => {
    const inputFields = document.querySelectorAll("input");

    // Effacer le contenu de chaque input
    inputFields.forEach((input) => {
      input.value = "";
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
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    if (selectedFile) {
      formData.append("image", selectedFile);
    } else {
      formData.append("image", originalFile);
    }

    for (const [key, value] of Object.entries(inputs)) {
      formData.append(key, value);
    }

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      await axios.put(
        `http://localhost:8800/api/pizzas/update/${id}`,
        formData
      );
      toast.success("Pizza mise à jour !", {
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
      toast.error("Erreur : Pizza non mise à jour !", {
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
        <p>Update Pizza id: {id}</p>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name="nom"
              id=""
              placeholder="Nom"
              value={inputs.nom}
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              name="description"
              id=""
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
            />
          </div>
          <div className="user-box">
            <input
              type="text"
              name="prix"
              id=""
              placeholder="Prix"
              value={inputs.prix}
              onChange={handleChange}
            />
          </div>
          <div className="input-file user-box">
            <input
              type="file"
              name="image"
              id=""
              placeholder="Image"
              onChange={handleFileChange}
            />
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : `${process.env.REACT_APP_API_URL}${originalFile}`} alt={inputs.image_descrip} width={80}/>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="image_descrip"
              id=""
              placeholder="Description Image"
              value={inputs.image_descrip}
              onChange={handleChange}
            />
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
                <option
                  className="option-categ"
                  key={category.id}
                  value={category.id}
                >
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
              Mettre à jour
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
              Retourner à DataGrid
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UpdatePizza;
