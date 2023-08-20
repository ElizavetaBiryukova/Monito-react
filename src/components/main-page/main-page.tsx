import { Header } from '../header/header';
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { Cards, CardsKnowledge, CardsProducts } from '../../types/types';
import { Currensy } from '../../types/types';

type AppProps = {
    cards: Cards;
    cardsProducts: CardsProducts;
    cardsKnowledge: CardsKnowledge;
    сurrensy: Currensy;
    setCurrensy: React.Dispatch<React.SetStateAction<Currensy>>;
};

export function MainPage({ cards, cardsProducts, cardsKnowledge, сurrensy, setCurrensy }: AppProps): JSX.Element {

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
