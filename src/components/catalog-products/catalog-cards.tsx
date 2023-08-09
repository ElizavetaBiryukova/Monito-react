import { CardProduct } from "../card-product/card-product"
import { CardsProducts } from "../../types/types"

type CatalogProductsProps = {
    cardsProducts: CardsProducts;

}

export function CatalogProducts({ cardsProducts }: CatalogProductsProps): JSX.Element {
    return (
        <>
            <ul className="products__catalog catalog__cards">
                {cardsProducts.map((card) => (
                    <CardProduct
                        key={card.id}
                        cardsProducts={card}
                    />
                ))}
            </ul>
        </>
    )
}