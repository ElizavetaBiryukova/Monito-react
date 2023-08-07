import { CatalogCards } from "../catalog-cards/catalog-cards"

export function PetsSection() {
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
                <CatalogCards />
            </section>
        </>
    )
}