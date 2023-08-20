import { CardProductType } from "../../types/types"
import { Currensy } from '../../types/types'

type CardProductProps = {
    cardsProducts: CardProductType;
    сurrensy: Currensy;
    indexCurr: number;
}

export function CardProduct({ cardsProducts, сurrensy, indexCurr }: CardProductProps): JSX.Element {
    return (
        <>
            <li className="catalog__card card">
                <img
                    src={cardsProducts.image}
                    alt="products"
                    className="card__img"
                />
                <div className="card__text">
                    <h4 className="card__title">{cardsProducts.name}</h4>
                    <p className="card__description">
                        <span className="card__product">
                            Product:<span>{cardsProducts.product}</span>
                        </span>
                        <span className="card__decoration">·</span>
                        <span className="card__size">
                            Size:<span>{cardsProducts.size}</span>
                        </span>
                    </p>
                    <p className="card__value">
                        <span className="card__price">{Math.ceil(cardsProducts.price / indexCurr).toLocaleString()}</span>
                        <span className="card__currency"> {сurrensy.name}</span>
                    </p>
                </div>
                <div className="card__prize">{cardsProducts.prize}</div>
            </li>
        </>
    )
}