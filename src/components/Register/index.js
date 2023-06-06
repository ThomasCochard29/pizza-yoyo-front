import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

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
                    <a href="#" onClick={handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Inscription
                    </a>
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
                        <btn href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Connection
                        </btn>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register;