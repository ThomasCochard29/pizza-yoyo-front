import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Img
import Logo from '../../images/logo/LogoWhite.png';

// CSS
import "../../App.css";

// Icone 
import { GiFullPizza } from "react-icons/gi"
import { FaUserCircle } from "react-icons/fa"
import { MdCategory } from "react-icons/md"

// Components
import PizzaGrid from "./PizzaGrid/index.js";
import CategorieGrid from "./CategorieGrid/index.js";
import UserGrid from "./UserGrid/index.js";

const Admin = () => {

    const location = useLocation();

    const [showPizzaGrid, setShowPizzaGrid] = useState(false);
    const [showCategGrid, setShowCategGrid] = useState(false);
    const [showUserGrid, setShowUserGrid] = useState(false);

    const handleLinkClickPizza = (e) => {
        e.preventDefault();
        setShowPizzaGrid(!showPizzaGrid);
        setShowCategGrid(false);
        setShowUserGrid(false);
    };

    const handleLinkClickCateg = (e) => {
        e.preventDefault();
        setShowCategGrid(!showCategGrid);
        setShowPizzaGrid(false);
        setShowUserGrid(false);
    };

    const handleLinkClickUser = (e) => {
        e.preventDefault();
        setShowUserGrid(!showUserGrid);
        setShowCategGrid(false);
        setShowPizzaGrid(false);
    };
    
    const lienMenuAdmin = [
        { 
          id: 1, 
          nom:  <a
                  href
                  className={"a-admin"}
                  onClick={handleLinkClickPizza}
                  title="Pizza"
                >
                  <GiFullPizza size={"50"} color="white"/>
                </a>,
        },
        { 
          id: 2, 
          nom:  <a
                  href
                  className={"a-admin"}
                  onClick={handleLinkClickCateg}
                  title="Categorie"
                >
                  <MdCategory size={"50"} color="white"/>
                </a>, 
        },
        { 
          id: 3, 
          nom:  <a
                  href
                  className={"a-admin"}
                  onClick={handleLinkClickUser}
                  title="User"
                >
                  <FaUserCircle size={"50"} color="white"/>
                </a>,
        }
      ];

    const mesLiensAdmin = lienMenuAdmin.map((lienAdmin , i) => (
        <Link key={i}>
          {lienAdmin.nom}
        </Link>
    ));

    return (
        <div className="container">
            <nav className={"nav-admin"}
                style={
                    location.pathname === "/admin" ? null : {display: "none"}
                }
            >

              <div className="div-logo-admin">
                <Link to={"/"}>
                  <img 
                      src={Logo} 
                      alt="Logo Pizza YoYo"
                      className="logo-admin"
                  />
                </Link>
              </div>
      
              <ul className="ul-admin">
                  <li className="li-admin">{mesLiensAdmin}</li>
              </ul>
            
            </nav>
          <div class="content">
            {  showPizzaGrid && < PizzaGrid />}
            {  showCategGrid && < CategorieGrid />}
            {  showUserGrid && < UserGrid />}
          </div>
        </div>
    )
}

export default Admin;
