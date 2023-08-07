import { CatalogProducts } from "../catalog-products/catalog-cards";


export function ProductsSection(): JSX.Element {
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
                <CatalogProducts />
            </section>
        </>
    )
}