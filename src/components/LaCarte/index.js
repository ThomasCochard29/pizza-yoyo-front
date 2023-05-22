import React from "react";

// CSS
import "../../App.css";

// Image
import Pizza from '../../images/d.png'
import Burger from '../../images/a.png'
import Salade from '../../images/e.png'
import Tacos from '../../images/g.png'
import Frite from '../../images/c.png'
import Boisson from '../../images/b.png'

// Components
import PizzaCard from "../pizzaCard";

const LaCarte = () => {
    return (
        <div>
            <div className="header-lacarte">

                <section className="search-lacarte">
                    <div className="search-div">
                        <input className="search" type="text" placeholder="Rechercher" />
                    </div>
                </section>
                
                <section className="choix">
                <div className="choix-item">
                    <img className="logo-item" src={Pizza} alt="" />
                    <p>Pizza</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Burger} alt="" />
                    <p>Burgers</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Salade} alt="" />
                    <p>Salads</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Tacos} alt="" />
                    <p>Tacos</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Frite} alt="" />
                    <p>Fries</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Salade} alt="" />
                    <p>Salads</p>
                </div>
                <div className="choix-item">
                    <img className="logo-item" src={Boisson} alt="" />
                    <p>Pizza</p>
                </div></section>
            </div>
            
            <h1 className="h1-np">Nos Article</h1>

            <PizzaCard />
  
        </div>
    )
}

export default LaCarte;
