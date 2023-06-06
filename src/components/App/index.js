import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  
  return (
      <Router>

          <Navbar/>

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/lacarte" element={<LaCarte />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/panier" element={<Panier />} />
        </Routes>

        <Footer/>

      </Router>
  );
}

export default App;
