import { useNavigate } from "react-router-dom";
import { CardType } from "../../types/types"
import { Currensy } from '../../types/types';

type CardProps = {
    card: CardType;
    сurrensy: Currensy;
}

export function Card({ card, сurrensy }: CardProps): JSX.Element {
    const navigate = useNavigate();

    const navigateToCardHandler = (id: string) => {
        navigate(`/card/${id}`);
    }

    return (
        <>
            <li className="catalog__card card" onClick={() => navigateToCardHandler(card.id)}>
                <img
                    src={card.image}
                    alt="dog"
                    className="card__img"
                />
                <div className="card__text">
                    <h4 className="card__title">{card.name}</h4>
                    <p className="card__description">
                        <span className="card__gene">
                            Gene: <span className="card__gene card__gene--bold">{card.gene}</span>
                        </span>
                        <span className="card__decoration">·</span>
                        <span className="card__age">
                            Age: <span className="card__age card__age--bold">{card.age} months</span>
                        </span>
                    </p>
                    <p className="card__value">
                        <span className="card__price">{card.price.toLocaleString()}</span>
                        <span className="card__currency"> {сurrensy.name}</span>
                    </p>
                </div>
            </li>
        </>

    )
}