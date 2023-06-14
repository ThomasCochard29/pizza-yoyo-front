import React, { useContext, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthContext } from "../context/authContext";

// CSS
import "../../App.css";

// Components
import Home from '../Home'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer";
import Contact from "../Contact";
import LaCarte from "../LaCarte";
import Login from "../Login";
import Register from "../Register"
import Panier from "../Panier";
import Admin from "../Admin";
import UserGrid from "../Admin/UserGrid";
import CategorieGrid from "../Admin/CategorieGrid";
import PizzaGrid from "../Admin/PizzaGrid";
import AddPizza from "../Admin/PizzaGrid/add";
import AddCategorie from "../Admin/CategorieGrid/add";

function App() {

  const { currentUser } = useContext(AuthContext);
  
  return (
    <Router>

      <Navbar/>

        <Routes>
          <Route exact path="/" element={< Home />}/>
          <Route exact path="/lacarte" element={< LaCarte />}/>
          <Route exact path="/contact" element={< Contact />}/>
          <Route exact path="/login" element={< Login />}/>
          <Route exact path="/register" element={< Register />}/>
          <Route exact path="/panier" element={< Panier />}/>
          <Route exact path="/admin" element={< Admin />}/>
          <Route exact path="/admin/usergrid" element={< UserGrid />}/>
          <Route exact path="/admin/categoriegrid" element={< CategorieGrid />}/>
          <Route exact path="/admin/addcategorie" element={< AddCategorie />}/>
          <Route exact path="/admin/pizzagrid" element={< PizzaGrid />}/>
          <Route exact path="/admin/addpizza" element={< AddPizza />}/>
        </Routes>        

      < Footer/>
        
    </Router>
  );
}

export default App;
