export type CardType = {
    id: string,
    image: string,
    name: string,
    gene: string,
    age: string,
    price: number,
}

export type Cards = Array<CardType>;

export type CardProductType = {
    id: string,
    image: string,
    name: string,
    product: string,
    size: string,
    price: number,
    prize: string
}

export type CardsProducts = Array<CardProductType>;

export type CardKnowledgeType = {
    id: string,
    image: string,
    title: string,
    text: string,
}

export type CardsKnowledge = Array<CardKnowledgeType>;