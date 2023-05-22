import React from "react";

// CSS
import "../../App.css";

// Image
import pizzaOffreLimite from '../../images/freelargepizza2.png';
import pizzaTrad from '../../images/pizza_trad.png';

const Promo = () => {
    return (
        <div className="Promo">
            <div className="promoMardi">
                <p>Promotion</p>
                <h1>Les Mardis</h1>

                <span className="span-promo">
                    NE MANQUEZ PAS NOTRE PROMOTION
                    <br />
                    PIZZA A MOITIE PRIX !!!
                </span>

                <span className="span-yellow">
                    7.00€
                </span>

                <button className="btn-promo">
                    COMMANDER
                </button>

                <img className="img-promo img-promo-mardi" src={pizzaTrad} alt="Image Pizza Traditionnel" />
            </div>
            <div className="promoVendredi">
                <p>Promotion</p>
                <h1>Les Vendredis</h1>
                
                <span className="span-promo">
                    3 PIZZAS MAXI ACHETEES
                </span>

                <span className="span-yellow">
                    LA 3EME A 3.00€*
                </span>

                <span className="span-asterix">
                    *la moins chère des trois
                </span>
                
                <button className="btn-promo">
                    COMMANDER
                </button>

                <img className="img-promo img-promo-vendredi" src={pizzaOffreLimite} alt="Image Pizza Offre Limite" />
            </div>
        </div>
    )
}

export default Promo;
