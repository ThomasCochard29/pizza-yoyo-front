import React, { useState, useEffect } from "react";

// CSS
import "./hamster.css";

const Hamster = () => {

    // State de la position par rapport au Scroll
    const [scrollPosition, setScrollPosition] = useState(0);

    // State pour l'affichage du Hamster
    const [hamster, setHamster] = useState(false);

    // Affichage et déplacement du Hamster
    const hamsterLocation = () => {
        //console.log(window.scrollY)
        if(window.scrollY >= 4400) {
            setHamster(true);
            const handleScroll = () => {
                const currentPosition = "4400";
                setScrollPosition(currentPosition);
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else if (window.scrollY >= 300) {
            setHamster(true)
            const handleScroll = () => {
                const currentPosition = window.scrollY;
                setScrollPosition(currentPosition);
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            setHamster(false);
        }
    };

    useEffect(() => {
        hamsterLocation();
        // adding the event when scroll move Hamster
        window.addEventListener("scroll", hamsterLocation);
    });

    return (
        <div 
            aria-label="Orange and tan hamster running in a metal wheel" 
            role="img" 
            class="wheel-and-hamster"
            className={[
                hamster
                ? "wheel-and-hamster"
                : "hamster-none"
            ]}
            style={{ transform: `translateX(-${(scrollPosition / 1.7)}px)` }}
        >
            <div class="wheel"></div>
            <div class="hamster">
                <div class="hamster__body">
                    <div class="hamster__head">
                        <div class="hamster__ear"></div>
                        <div class="hamster__eye"></div>
                        <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>
    )
}

export default Hamster;