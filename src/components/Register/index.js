import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CSS
import "../../App.css";
import "../Login/login.css"

const Register = () => {

    const [inputs, setInputs] = useState(
        {
            username: "",
            email: "",
            password: ""
        }
    );

    console.log(inputs[1]);

    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleClick = async e => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
            navigate("/login")
            toast.success("Utilisateur Inscris !", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                bodyClassName: "toastify-content",
            });
        } catch (err) {
            setErr(err.response?.data);
        }
    }

    console.log(err);

    return (
        <div className="form-contact login-contact">
            <div className="form-contact-gray">
                <p>Inscription</p>
                <form>
                    <div className="user-box">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="user-box">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>
                    {err && err}
                    <button href="#" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Inscription
                    </button>
                    <p
                        style={{
                            fontSize: "16px",
                            textAlign: "start",
                            marginLeft: "9.9vw",
                            marginTop: "1vh"
                        }}
                    >
                        Vous Avez Deja Un Compte ?
                    </p>
                    <Link to="/login" className="btn-logintoregister">
                        <button href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Connection
                        </button>
                    </Link>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Register;