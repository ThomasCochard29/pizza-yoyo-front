import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdWavingHand } from "react-icons/md"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data);
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/auth/user", {
          withCredentials: true,
        });

        setCurrentUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout", null, {
        withCredentials: true,
      });
      setCurrentUser(null);
      toast(<p style={{fontSize: "16px", marginTop: "10px"}}><MdWavingHand size={"10%"} style={{marginRight: "2vw"}}/>Utilisateur Déconnecté(e) !</p>, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-content",
    });
    } catch (error) {
      console.log(error);
      toast.error("Un Problème est Survenu. Nous N'Avons Pas Pu Vous Déconnecté(e)", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        bodyClassName: "toastify-content",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
