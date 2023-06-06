import React, { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

// CSS
import "../../App.css";
import "./login.css"

const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const [err, setErr] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await login(inputs);
        navigate("/")
        } catch(err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="form-contact login-contact">
            <div className="form-contact-gray">
                <p>Connexion</p>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    </div>
                    { err && err}
                    <a href="#" onClick={handleLogin}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Connection
                    </a>
                    <p style={{fontSize: "16px", textAlign: "start", marginLeft: "9.9vw", marginTop: "1vh"}}>Vous N'Avez Pas De Compte ?</p>
                    <Link to="/register" className="btn-logintoregister">
                        <btn href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Inscription
                        </btn>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;