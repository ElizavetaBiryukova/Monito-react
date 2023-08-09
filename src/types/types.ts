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