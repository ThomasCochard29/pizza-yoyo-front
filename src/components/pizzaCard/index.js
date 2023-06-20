import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';
import { useLocation } from "react-router";

// CSS
import "../../App.css";

const PizzaCard = () => {
    const location = useLocation();

    const [data, setData] = useState([]);
    const [filteredPizzas, setFilteredPizzas] = useState([]); // Pizzas filtrées
    const [basePizza, setBasePizza] = useState("Tomate");

    // State de le style du bouton si on click 
    const [couleurActive, setCouleurActive] = useState(null);

    useEffect(() => { 
      axios.get('http://localhost:8800/api/pizzas/find')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const pizzaBase = data.filter((data) => data);
        setFilteredPizzas(pizzaBase);
    }, [data]);      

    // Gestion du click pour set le style du bouton et set le choix de la base
    const handleOnClick = (base) => {
        setBasePizza(base)
        const pizza = data.filter((data) => data.categorie_base === basePizza)
        setFilteredPizzas(pizza);
        setCouleurActive(base);      
    }

    // Parcour du fichier de la data pour les pizzas et creation de la card pour l'affichage des pizzas
    const pizzaCard = filteredPizzas.map((data, i) => {
        return(
            <Card sx={{minWidth: 200, maxWidth: 340, minHeight: 500, maxHeight: 600}} key={i} className="card-template" style={location.pathname === '/lacarte' ? {margin : "2% 7.6%"} : {margin : "2% 11%"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240vh"
                        src={`${process.env.REACT_APP_API_URL}${data.image}`}
                        alt={data.image_descrip}
                    />
                    <CardContent className="card-content">
                        <Typography 
                            gutterBottom 
                            variant="h4"
                        >
                            {data.nom}
                        </Typography>
                        <Typography style={{fontSize: '16px'}}>
                            {data.description.slice(0, 140)}...
                        </Typography>
                        <Typography style={{color: '#FFCD02', marginTop: '10px', fontSize: '20px', fontWeight: 'bold'}}>
                            {data.prix}€
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    });

    return (
        <>
            <section className="filter">
                <button 
                    onClick={() => handleOnClick(("Tomate"))} 
                    style={
                        {   
                            backgroundColor: couleurActive === 'Tomate' ? '#C00A27' : 'white', 
                            color: couleurActive === 'Tomate' ? 'white' : 'black' 
                        }
                    } 
                    className="btn-filter btn-tomate"
                    name="base"
                    value={1}
                >
                    BASE TOMATE
                </button>

                <button 
                    onClick={() => handleOnClick("Creme Fraiche")} 
                    style={
                        { 
                            backgroundColor: couleurActive === 'Creme Fraiche' ? '#FFCD02' : 'white', 
                            color: couleurActive === 'Creme Fraiche' ? 'white' : 'black' 
                        }
                    }
                    className="btn-filter btn-cf"
                    name="base"
                    value={2}
                >
                    BASE CREME FRAICHE
                </button>

                <button 
                    onClick={() => handleOnClick("Chocolat")} 
                    style={
                        { 
                            backgroundColor: couleurActive === 'Chocolat' ? '#00A149' : 'white', 
                            color: couleurActive === 'Chocolat' ? 'white' : 'black' 
                        }
                    } 
                    className="btn-filter btn-choco"
                    name="base"
                    value={3}
                >
                    BASE CHOCOLAT
                </button>
            </section>

            <section className={location.pathname === '/lacarte' ? "section-card-article" : "section-card"}>
               { pizzaCard } 
            </section>
        </>
    )
}

export default PizzaCard;