import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// CSS
import "./Navbar.css";

// Components
import Hamster from "../WheelHamster";

// Img
import Logo from '../../images/logo/Logo.png';

// Icone
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiSearchCircle } from 'react-icons/hi';


function Navbar() {

  const location = useLocation();

  // Tableau pour les items de la nav
  const lienMenu = [
    { 
      id: 1, 
      nom: <a
              className="nav-item-a"
              style={{   
                backgroundColor: location.pathname === '/' ? '#00A149' : '#C00A27'
              }}
            >
              Accueil
            </a>, 
      lien: "/"
    },
    { 
      id: 2, 
      nom: <a
              className="nav-item-a"
              style={{   
                backgroundColor: location.pathname === '/lacarte' ? '#00A149' : '#C00A27'
              }}
            >
              La Carte
            </a>,  
      lien: "/lacarte" 
    },
    { 
      id: 3, 
      nom: <a
              className="nav-item-a"
              style={{   
                backgroundColor: location.pathname === '/contact' ? '#00A149' : '#C00A27'
              }}
            >
              Contact
            </a>,
      lien: "/contact" 
    },
    { 
      id: 4, 
      nom:  <div className="nav-item-div" style={{display: 'flex', alignItems: 'center'}}>
              <BsFillTelephoneFill className="nav-item-div"/>
              <p className="nav-item-div" style={{margin: '0px 0px 0px 10px'}}>06 01 02 03 04</p>
            </div>
    }
  ];
  
  // On parcour le tableau lienMenu pour les affichers
  const mesLiens = lienMenu.map((lien , i) => (
    <a key={i} className="nav-link" href={lien.lien}>
      {lien.nom}
    </a>
  ));

  // state changement de background pour le scroll
  const [navbar, setNavbar] = useState(false);
  const [hamster, setHamster] = useState(false);

  //Fonction changement de background scroll de la navbar
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 300) {
      setNavbar(true);
      setHamster(true)
    } else {
      setNavbar(false);
      setHamster(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return(
    <nav className={
      navbar
      ? "navbar fixed-top"
      : "navbarChange fixed-top"
    }>
      <div>
        <img 
          src={Logo} 
          alt="Logo Pizza YoYo"
          className={
            hamster
            ? "logo-out"
            : "logo"
          }
        />
        <Hamster/>
      </div>

      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>

      <ul>
        <li className="nav-item d-flex">{mesLiens}</li>
      </ul>

      <HiSearchCircle size="40px" color="white" className="search-icon"/>
    </nav>
  ) 
}

export default React.memo(Navbar);