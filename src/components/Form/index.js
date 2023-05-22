import React from "react";

// CSS
import "../../App.css";

const Formulaire = () => {
    return (
        <div className="form-contact">
            <div className="form-contact-gray">
                <p>Envoyez-nous un message</p>
                <form>
                    <div className="user-box">
                        <input type="text" name="" id="" placeholder="Nom" />
                    </div>
                    <div className="user-box">
                        <input type="text" name="" id="" placeholder="Email"/>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" id="" placeholder="Sujet"/>
                    </div>
                    <div className="user-box">
                        <textarea name="" id="" cols="40" rows="8" resize="none"></textarea>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Envoyer
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Formulaire;