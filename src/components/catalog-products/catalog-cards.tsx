import { CardProduct } from "../card-product/card-product"

export function CatalogProducts() {
    return (
        <>
            <ul className="products__catalog catalog__cards">
                <CardProduct />
            </ul>
        </>
    )
}