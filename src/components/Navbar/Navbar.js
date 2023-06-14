import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

// CSS
import "./Navbar.css";

// Img
import Logo from '../../images/logo/Logo.png';

// Icone
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiSearchCircle } from 'react-icons/hi';
import { SiCodechef } from 'react-icons/si';
import { TbCircleKeyFilled } from 'react-icons/tb';
import { AiFillShopping } from 'react-icons/ai';


function Navbar() {

  const location = useLocation();

  // Tableau pour les items de la nav
  const lienMenu = [
    { 
      id: 1, 
      nom: <a
              className={ location.pathname === '/' ? 'nav-item-b' : 'nav-item-a' }
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
              className={ location.pathname === '/lacarte' ? 'nav-item-b' : 'nav-item-a' }
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
              className={ location.pathname === '/contact' ? 'nav-item-b' : 'nav-item-a' }
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
      nom:  <div 
              className="nav-item-div" 
              style={{display: 'flex', alignItems: 'center'}}
            >
              <BsFillTelephoneFill className="nav-item-a custom-icon"/>
              <p className="nav-item-a" style={{margin: '0px 0px 0px 10px'}}>06 01 02 03 04</p>
            </div>
    }
  ];
  
  // On parcour le tableau lienMenu pour les affichers
  const mesLiens = lienMenu.map((lien , i) => (
    <Link key={i} className="nav-link" to={lien.lien}>
      {lien.nom}
    </Link>
  ));

  // state changement de background pour le scroll
  const [navbar, setNavbar] = useState(false);

  //Fonction changement de background scroll de la navbar
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  const { currentUser, handleLogout } = useContext(AuthContext);

  return(
    <nav className={
      navbar
      ? "navbarChange fixed-top"
      : "navbarChange"
    }>
      <div>
        <img 
          src={Logo} 
          alt="Logo Pizza YoYo"
          className="logo"
        />
      </div>

      <input type="checkbox" id="click" />
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>

      <ul>
        <li className="nav-item d-flex">{mesLiens}</li>
      </ul>

      <Link to="/panier">
        <AiFillShopping
          size="40px"
          color="white"
          className="nav-item-div"
          style={{marginTop: "-1vw"}}
        />
      </Link>

      {currentUser && currentUser.admin && (
        <Link to={currentUser ? "/admin" : "/login"}>
          <TbCircleKeyFilled 
            size="40px" 
            style={{marginRight: "20px"}} 
            color="white"
            className="search-icon"
          />
        </Link>
      )}

      <Link to={!currentUser ? "/login" : "/"} className="search-icon">
        <SiCodechef 
          size="40px"
          style={{marginRight: "20px"}} 
          color="white" 
          title={!currentUser ? "Connexion" : "Déconnexion"}
          onClick={!currentUser ? null : handleLogout}
        />
      </Link>

      <HiSearchCircle 
        size="40px" 
        color="white" 
        className="search-icon"
      />
    </nav>
  ) 
}

export default React.memo(Navbar);