import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../../App.css";

const Formulaire = () => {

    const env = process.env;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
            toast.error("Veuillez remplir tous les champs", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                bodyClassName: "toastify-content",
            });
            return;
        } else {
            emailjs.sendForm(env.REACT_APP_YOUR_SERVICE_ID, env.REACT_APP_YOUR_TEMPLATE_ID, form.current, env.REACT_APP_YOUR_PUBLIC_ID)
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success("Email Envoyé!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        bodyClassName: "toastify-content",
                    });
                },
                (error) => {
                    console.log(error.text);
                    toast("Un Problème est survenu. Veuillez Réessayer !");
                }
            )
        }
    };

    return (
        <div className="form-contact">
            <div className="form-contact-gray">
                <p>Envoyez-nous un message</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="user-box">
                        <input type="text" name="name" id="" placeholder="Nom" />
                    </div>
                    <div className="user-box">
                        <input type="text" name="email" id="" placeholder="Email"/>
                    </div>
                    <div className="user-box">
                        <input type="text" name="sujet" id="" placeholder="Sujet"/>
                    </div>
                    <div className="user-box">
                        <textarea name="message" id="" cols="40" rows="8" resize="none"></textarea>
                    </div>
                    <button type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Envoyer
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Formulaire;