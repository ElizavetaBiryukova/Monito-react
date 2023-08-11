import nextId from "react-id-generator";
import { CardType, Cards, CardProductType, CardsProducts } from "../types/types"
import { IMAGES_PETS, NAMES, GENES, AGES, IMAGE_PRODUCTS, PRODUCT_NAMES, PRODUCT, SIZES, PRIZE } from "./const";
import { getRandomInteger } from "./util";

const CARDS = 8;

function makeCounter() {
    let count = 0;

    return function () {
        if (count > CARDS) {
            return count = 0;
        }
        return count++; // есть доступ к внешней переменной "count"
    };
}

const counterImages = makeCounter();
const counterNames = makeCounter();
const counterProductImages = makeCounter();
const counterProductNames = makeCounter();

const generateImage = () => {
    return IMAGES_PETS[counterImages()];
}

const generateName = () => {
    return NAMES[counterNames()];
}

const generateProductImage = () => {
    return IMAGE_PRODUCTS[counterProductImages()];
}

const generateProductName = () => {
    return PRODUCT_NAMES[counterProductNames()];
}

const generateGene = () => {
    const randomIndex = getRandomInteger(0, GENES.length - 1);
    return GENES[randomIndex];
}

const generateAge = () => {
    const randomIndex = getRandomInteger(0, AGES.length - 1);
    return AGES[randomIndex];
}

const generatePrice = () => {
    const randomIndex = getRandomInteger(4000000, 9000000);
    return randomIndex;
}

const generateProduct = () => {
    return PRODUCT[counterNames()];
}

const generateSize = () => {
    const randomIndex = getRandomInteger(0, SIZES.length - 1);
    return SIZES[randomIndex];
}

const generatePrize = () => {
    const randomIndex = getRandomInteger(0, PRIZE.length - 1);
    return PRIZE[randomIndex];
}

export const generateCard = (): CardType => {
    const card: CardType =
    {
        id: nextId(),
        image: generateImage(),
        name: generateName(),
        gene: generateGene(),
        age: generateAge(),
        price: generatePrice(),
    }
    return card
}

export const generateProductCard = (): CardProductType => {
    const productCard: CardProductType =
    {
        id: nextId(),
        image: generateProductImage(),
        name: generateProductName(),
        product: generateProduct(),
        size: generateSize(),
        price: generatePrice(),
        prize: generatePrize(),
    }
    return productCard
}

export const cards: Cards = new Array(CARDS).fill(0).map(generateCard);
export const cardsProducts: CardsProducts = new Array(CARDS).fill(0).map(generateProductCard);
