import React from "react";

// CSS
import "../../App.css";

// Components
import PizzaCard from "../pizzaCard";
import CarteFidelite from "../CarteFidelite";
import Map from "../Map";
import Formulaire from "../Form";

const NosPizzas = () => {

    return (
        <div>
            <h1 className="h1-np">Nos Pizzas</h1>
            
            <PizzaCard />
            <CarteFidelite />
            <Map />
            <Formulaire />
            
        </div>
    )
}

export default NosPizzas;
