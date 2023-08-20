import { CatalogProducts } from "../catalog-products/catalog-cards";
import { CardsProducts } from "../../types/types";
import { Currensy } from '../../types/types';

type ProductsProps = {
    cardsProducts: CardsProducts;
    сurrensy: Currensy;
    indexCurr: number;
}


export function ProductsSection({ cardsProducts, сurrensy, indexCurr }: ProductsProps): JSX.Element {
    return (
        <>
            <section className="products">
                <div className="products__text caption">
                    <p className="caption__question">
                        Hard to choose right products for your pets?
                    </p>
                    <h3 className="caption__title">Our Products</h3>
                </div>
                <div className="products__view view">
                    <a href="!#" className="view__link">
                        <div className="view__sign">View more &gt;</div>
                    </a>
                </div>
                <CatalogProducts
                    cardsProducts={cardsProducts}
                    сurrensy={сurrensy}
                    indexCurr={indexCurr}
                />
            </section>
        </>
    )
}