import nextId from "react-id-generator";
import { CardType, Cards, CardProductType, CardsProducts, CardKnowledgeType, CardsKnowledge } from "../types/types"
import { IMAGES_PETS, NAMES, GENES, AGES, IMAGE_PRODUCTS, PRODUCT_NAMES, PRODUCT, SIZES, PRIZE, IMAGE_KNOWLEDGE, TITLE_KNOWLEDGE, TEXT_KNOWLEDGE } from "./const";
import { getRandomInteger } from "./util";

const CARDS = 8;
const CARDS_KNOWLEDGE = 3;

function makeCounter(cards: number) {
    let count = 0;

    return function () {
        if (count > cards) {
            return count = 0;
        }
        return count++; // есть доступ к внешней переменной "count"
    };
}

const counterImages = makeCounter(CARDS);
const counterNames = makeCounter(CARDS);
const counterProductImages = makeCounter(CARDS);
const counterProductNames = makeCounter(CARDS);
const counterKnowledgeImg = makeCounter(CARDS_KNOWLEDGE);
const counterKnowledgeTitle = makeCounter(CARDS_KNOWLEDGE);
const counterKnowledgeText = makeCounter(CARDS_KNOWLEDGE);

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

const generateKnowledgeImage = () => {
    return IMAGE_KNOWLEDGE[counterKnowledgeImg()];
}

const generateKnowledgeTitle = () => {
    return TITLE_KNOWLEDGE[counterKnowledgeTitle()];
}
const generateKnowledgeText = () => {
    return TEXT_KNOWLEDGE[counterKnowledgeText()];
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

export const generateKnowledgeCard = (): CardKnowledgeType => {
    const knowledgeCard: CardKnowledgeType =
    {
        id: nextId(),
        image: generateKnowledgeImage(),
        title: generateKnowledgeTitle(),
        text: generateKnowledgeText(),
    }
    return knowledgeCard
}

export const cards: Cards = new Array(CARDS).fill(0).map(generateCard);
export const cardsProducts: CardsProducts = new Array(CARDS).fill(0).map(generateProductCard);
export const cardsKnowledge: CardsKnowledge = new Array(CARDS_KNOWLEDGE).fill(0).map(generateKnowledgeCard);
export const cardsSeeMore: Cards = new Array(4).fill(0).map(generateCard);
