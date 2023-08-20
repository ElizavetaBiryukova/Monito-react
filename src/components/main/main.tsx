import { PetsSection } from "../pets-section/pets-section";
import { IntroBlue } from "../intro-blue/intro-blue";
import { ProductsSection } from "../products-section/products-section";
import { BrendsSection } from "../brends-section/brends-section";
import { IntroAdoption } from "../intro-adoption/intro-adoption";
import { KnowledgeSection } from "../knowledge-section/knowledge-section";
import { Cards, CardsKnowledge, CardsProducts } from "../../types/types";
import { Currensy } from '../../types/types';

type MainProps = {
    cards: Cards;
    cardsProducts: CardsProducts;
    cardsKnowledge: CardsKnowledge;
    сurrensy: Currensy;
    indexCurr: number;
}


export function Main({ cards, cardsProducts, cardsKnowledge, сurrensy, indexCurr }: MainProps): JSX.Element {
    return (
        <>
            <main className="main">
                <h1 className="visually-hidden">Monito - pet shop</h1>
                <PetsSection
                    cards={cards}
                    сurrensy={сurrensy}
                    indexCurr={indexCurr}
                />
                <IntroBlue />
                <ProductsSection
                    cardsProducts={cardsProducts}
                />
                <BrendsSection />
                <IntroAdoption />
                <KnowledgeSection
                    cardsKnowledge={cardsKnowledge}
                />
            </main>


        </>
    );
}