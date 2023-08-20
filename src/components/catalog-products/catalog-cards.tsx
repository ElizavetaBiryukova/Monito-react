import { CardProduct } from "../card-product/card-product"
import { CardsProducts } from "../../types/types"
import { Currensy } from '../../types/types';

type CatalogProductsProps = {
    cardsProducts: CardsProducts;
    сurrensy: Currensy;
    indexCurr: number;

}

export function CatalogProducts({ cardsProducts, сurrensy, indexCurr }: CatalogProductsProps): JSX.Element {
    return (
        <>
            <ul className="products__catalog catalog__cards">
                {cardsProducts.map((card) => (
                    <CardProduct
                        key={card.id}
                        cardsProducts={card}
                        сurrensy={сurrensy}
                        indexCurr={indexCurr}
                    />
                ))}
            </ul>
        </>
    )
}