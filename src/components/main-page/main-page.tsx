import { useState } from 'react';
import { Header } from '../header/header';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { Cards, CardsKnowledge, CardsProducts } from '../../types/types';
import { Currensy } from '../../types/types';
import Vnd from '../../assets/images/currency/vnd.svg';

type AppProps = {
    cards: Cards;
    cardsProducts: CardsProducts;
    cardsKnowledge: CardsKnowledge;
};

export function MainPage({ cards, cardsProducts, cardsKnowledge }: AppProps): JSX.Element {

    const [сurrensy, setCurrensy] = useState<Currensy>({
        image: Vnd,
        name: 'VND',
    });

    return (
        <>
            <Header
                сurrensy={сurrensy}
                setCurrensy={setCurrensy}
            />
            <Main
                cards={cards}
                cardsProducts={cardsProducts}
                cardsKnowledge={cardsKnowledge}
                сurrensy={сurrensy}
            />
            <Footer />
        </>
    );
}
