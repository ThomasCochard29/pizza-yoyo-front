import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// CSS
import "../../App.css";

// Components
import { pizzaData } from '../Data/data'

const PizzaCard = () => {

    // State pour la selection de la base de la pizza
    const [selectedBase, setSelectedBase] = useState("Tomate");

    // State de le style du bouton si on click 
    const [couleurActive, setCouleurActive] = useState(null);

    // Filtre pour l'affichage des pizzas
    const filterPizza = () => {
        if(selectedBase === "all") {
            return pizza
        } else {
            return pizzaData[0].base[selectedBase]
        }
    }

    // Gestion du click pour set le style du bouton et set le choix de la base
    const handleOnClick = (base) => {
        setSelectedBase(base);
        setCouleurActive(base);      
    }

    // Parcour du fichier de la data pour les pizzas et creation de la card pour l'affichage des pizzas
    const pizza = filterPizza().map((pizza , i) => {
        return(
            <Card sx={{ minWidth: 200, maxWidth: 340, minHeight: 440 }} key={i} className="card-template">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240vh"
                        image={Object.values(pizza.image)[0]}
                        alt={pizza.imageDescription}
                    />
                    <CardContent className="card-content">
                        <Typography 
                            gutterBottom 
                            variant="h3"
                        >
                            {pizza.nom}
                        </Typography>
                        <Typography style={{fontSize: '16px'}}>
                            {pizza.description}
                        </Typography>
                        <Typography style={{color: '#FFCD02', marginTop: '10px', fontSize: '20px', fontWeight: 'bold'}}>
                            {pizza.prix}
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
                    onClick={() => handleOnClick("Tomate")} 
                    style={
                        {   
                            backgroundColor: couleurActive === 'Tomate' ? '#C00A27' : 'white', 
                            color: couleurActive === 'Tomate' ? 'white' : 'black' 
                        }
                    } 
                    className="btn-filter btn-tomate"
                >
                    BASE TOMATE
                </button>

                <button 
                    onClick={() => handleOnClick("CremeFraiche")} 
                    style={
                        { 
                            backgroundColor: couleurActive === 'CremeFraiche' ? '#FFCD02' : 'white', 
                            color: couleurActive === 'CremeFraiche' ? 'white' : 'black' 
                        }
                    }
                    className="btn-filter btn-cf"
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
                >
                    BASE CHOCOLAT
                </button>
            </section>

            <section className="section-card">
               { pizza } 
            </section>
        </>
    )
}

export default PizzaCard;