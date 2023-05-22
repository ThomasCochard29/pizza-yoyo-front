import React from "react";

// CSS
import "../../App.css";

const Map = () => {
    return (
        <div className="map">
            <iframe 
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.7976643504186!2d4.688464507091703!3d45.604698738088004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e5e17d5625d1%3A0x863f26ee502fed34!2sPizza%20YOYO!5e0!3m2!1sfr!2sfr!4v1684484368349!5m2!1sfr!2sfr" 
                width="100%"
                height="100%"
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}

export default Map;