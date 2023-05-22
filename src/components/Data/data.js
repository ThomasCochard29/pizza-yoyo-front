// Image
import pizza1 from '../../images/4.png';
import pizza2 from '../../images/6.png';
import pizza3 from '../../images/8.png';
import pizza4 from '../../images/7.png';

const imageDescription = "image d'une pizza";

// Base Tomate
const nomT = "Olivia";
const descriptionT = "Base tomate, fromage, olives vertes, olives noires...";
const prixT = "6.00€";

// Base Creme Fraiche
const nomCF = "Célia";
const descriptionCF = "Base creme fraiche, fromage, poivron...";
const prixCF = "7.00€";

// Base Chocolat
const nomC = "Gaia";
const descriptionC = "Base chocolat, banane, vermicelles...";
const prixC = "8.00€";

// Data Pizza Card
export const pizzaData = [{
    base: {
        Tomate: [
            {
                id: 1,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza1 },
                imageDescription: imageDescription
            },
            {
                id: 2,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza2 },
                imageDescription: imageDescription
            },
            {
                id: 3,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza3 },
                imageDescription: imageDescription
            },
            {
                id: 4,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza4 },
                imageDescription: imageDescription
            },
            {
                id: 5,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza4 },
                imageDescription: imageDescription
            },
            {
                id: 6,
                nom: nomT,
                description: descriptionT,
                prix: prixT,
                image: { pizza4 },
                imageDescription: imageDescription
            },
        ],
        
        CremeFraiche: [
            {
                id: 1,
                nom: nomCF,
                description: descriptionCF,
                prix: prixCF,
                image: { pizza1 },
                imageDescription: imageDescription
            },
            {
                id: 2,
                nom: nomCF,
                description: descriptionCF,
                prix: prixCF,
                image: { pizza2 },
                imageDescription: imageDescription
            },
            {
                id: 3,
                nom: nomCF,
                description: descriptionCF,
                prix: prixCF,
                image: { pizza3 },
                imageDescription: imageDescription
            },
            {
                id: 4,
                nom: nomCF,
                description: descriptionCF,
                prix: prixCF,
                image: { pizza4 },
                imageDescription: imageDescription
            }
        ],

        Chocolat: [
            {
                id: 1,
                nom: nomC,
                description: descriptionC,
                prix: prixC,
                image: { pizza1 },
                imageDescription: imageDescription
            }
        ]
    }
}]