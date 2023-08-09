import { Card } from "../card/card"
import { Cards } from "../../types/types"

type CatalogProps = {
    cards: Cards;
}

export function CatalogCards({ cards }: CatalogProps): JSX.Element {
    return (
        <>
            <ul className="pets__catalog catalog__cards">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                    />
                ))}
            </ul>
        </>
    )
}