import { CardProduct } from "../card-product/card-product"

export function CatalogProducts(): JSX.Element {
    return (
        <>
            <ul className="products__catalog catalog__cards">
                <CardProduct />
            </ul>
        </>
    )
}