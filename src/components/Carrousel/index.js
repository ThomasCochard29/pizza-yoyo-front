import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Image
import pizzaOffreLimite from '../../images/freelargepizza.png'
import pizzaPrixFondent from '../../images/pizzaprixfondent.png'
import payementCarte from '../../images/payementcarte.png'
import pizzaVeggie from '../../images/veggie.png'

function Carrousel() {

    // Destructuring pour le choix de la couleur pour certains spans
    const styleSpan = {color: 'red'};

    return (
        <Carousel 
            // autoPlay={true}
            infiniteLoop={true} 
            interval={4000} 
            showArrows={false} 
            showThumbs={false}
        >
            <div className="custom-carousel blurBack" style={{background: 'red'}}>
                <img src={pizzaOffreLimite} height={"100%"}/>
                <p className='legend'>Offre Limité</p>
                <button className="legendBtnOL"><span style={styleSpan}>2</span> Pizzas Pour le Prix d'<span style={styleSpan}>Une</span></button>
            </div>
            <div className="custom-carousel">
                <img src={pizzaPrixFondent} height={"100%"}/>
            </div>
            <div className="custom-carousel">
                <img src={payementCarte} height={"100%"}/>
                <p className='legendCarte'>Payez Par Carte</p>
                <button className="legendBtnPC "><span style={styleSpan}>Payez</span> Facilement et en Toute <span style={styleSpan}>Sécurité</span></button>
            </div>
            <div className="custom-carousel">
                <img src={pizzaVeggie} height={"100%"}/>
                <p className='legendVeggie'>LA VEGGIE</p>
                <button className="legendBtnVeggie ">Une <span style={styleSpan}>Nouvelle</span> Offre <span style={styleSpan}>Végétarienne.</span></button>
            </div>
        </Carousel>
    );
}

export default Carrousel;