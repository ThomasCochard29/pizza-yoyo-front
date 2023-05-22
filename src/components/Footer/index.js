import React from "react";

// CSS
import "../../App.css";

// Image
import Snap from "../../images/snap.png"
import Twitter from "../../images/twitter.png"
import Youtube from "../../images/ytb.png"
import Facebook from "../../images/Facebook.png"
import Instagram from "../../images/instagram.png"
import TikTok from "../../images/tiktok.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-reseau">
                <a href="https://www.snapchat.com/fr-FR" target="_blank"><img src={Snap} alt="Logo Snapchat"/></a>
                <a href="https://twitter.com/home" target="_blank"><img src={Twitter} alt="Logo Twitter"/></a>
                <a href="https://www.youtube.com/" target="_blank"><img src={Youtube} alt="Logo Youtube"/></a>
                <a href="https://www.facebook.com/" target="_blank"><img src={Facebook} alt="Logo Facebook"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={Instagram} alt="Logo Instagram"/></a>
                <a href="https://www.tiktok.com/fr/" target="_blank"><img src={TikTok} alt="Logo TikTok"/></a>
            </div>
            <div className="footer-info">
                <div className="lien-utiles">
                    <p className="lien-titre">LIENS UTILES</p>

                    <p className="lien-p">Mention légales</p>
                    <p className="lien-p">Politique de cookies</p>
                    <p className="lien-p">Politique de données</p>
                    <p className="lien-p">Conditions Générales</p>
                    <p className="lien-p">Copyright</p>
                </div>
                <div className="horaire">
                    <p className="horaire-titre">HORAIRES D'OUVERTURE</p>

                    <p className="horaire-text">Du dimanche au jeudi</p>
                    <span className="horaire-span">de 11h à 14h et de 18h à 23h.</span>

                    <p className="horaire-text">et du vendredi au samedi</p>
                    <span className="horaire-span">de 18h à 00h.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;