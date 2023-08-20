import { CatalogCards } from "../catalog-cards/catalog-cards"
import { Cards } from "../../types/types"
import { Currensy } from '../../types/types';

type PetsProps = {
    cards: Cards;
    сurrensy: Currensy;
    indexCurr: number;
}

export function PetsSection({ cards, сurrensy, indexCurr }: PetsProps): JSX.Element {
    return (
        <>
            <section className="pets">
                <div className="pets__text caption">
                    <p className="caption__question">Whats new?</p>
                    <h3 className="caption__title">Take a look at some of our pets</h3>
                </div>
                <div className="pets__view view">
                    <a href="!#" className="view__link">
                        <div className="view__sign">View more &gt;</div>
                    </a>
                </div>
                <CatalogCards
                    cards={cards}
                    сurrensy={сurrensy}
                    indexCurr={indexCurr}
                />
            </section>
        </>
    )
}