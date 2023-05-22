import React from "react";

// CSS
import "../../App.css";

// Components
import Carrousel from "../Carrousel";
import Promo from "../Promo";
import NosPizzas from "../NosPizzas";

const Home = () => {
    return (
        <div>

            <Carrousel />
            <Promo />
            <NosPizzas />
  
        </div>
    )
}

export default Home;
