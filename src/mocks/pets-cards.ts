import nextId from "react-id-generator";
import { CardType, Cards } from "../types/types"
import { IMAGES_PETS, NAMES, GENES, AGES } from "./const";
import { getRandomInteger } from "./util";

function makeCounter() {
    let count = -1;

    return function () {
        if (count > 8) {
            return count = 0;
        }
        return count++; // есть доступ к внешней переменной "count"
    };
}

const counter = makeCounter();

const generateImage = () => {
    return IMAGES_PETS[counter()];
}

const generateName = () => {
    return NAMES[counter()];
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
    const randomIndex = getRandomInteger(40000000, 90000000);
    return randomIndex;
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

export const cards: Cards = new Array(8).fill(0).map(generateCard);
