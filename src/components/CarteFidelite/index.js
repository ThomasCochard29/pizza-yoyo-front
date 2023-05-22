import React from "react";

// CSS
import "../../App.css";

// Image
import fidelite from '../../images/Loyalty1.png';

const CarteFidelite = () => {
    return (
        <div className="carte-fidel" >
            <div className="carte-fidel-image" style={{ backgroundImage: `url(${fidelite})`}}></div>
        </div>
    )
}

export default CarteFidelite;