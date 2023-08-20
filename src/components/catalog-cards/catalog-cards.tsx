import { Card } from "../card/card"
import { Cards } from "../../types/types"
import { Currensy } from '../../types/types';

type CatalogProps = {
    cards: Cards;
    сurrensy: Currensy;
    indexCurr: number;
}

export function CatalogCards({ cards, сurrensy, indexCurr }: CatalogProps): JSX.Element {

    return (
        <>
            <ul className="pets__catalog catalog__cards">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        сurrensy={сurrensy}
                        indexCurr={indexCurr}
                    />
                ))}
            </ul>
        </>
    )
}