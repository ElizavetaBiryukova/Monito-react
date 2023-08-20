import { Card } from "../card/card"
import { Cards } from "../../types/types"
import { Currensy } from '../../types/types';

type SeeMoreProps = {
    cardsSeeMore: Cards;
    сurrensy: Currensy;
}

export function SeeMore({ cardsSeeMore, сurrensy }: SeeMoreProps): JSX.Element {
    return (
        <>
            <section className="see-more">
                <div className="see-more__text caption">
                    <p className="caption__question">Whats new?</p>
                    <h3 className="caption__title">See more puppies</h3>
                </div>
                <ul className="see-more__catalog catalog__cards">
                    {cardsSeeMore.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            сurrensy={сurrensy}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}