import { Card } from "../card/card"

export function CatalogCards(): JSX.Element {
    return (
        <>
            <ul className="pets__catalog catalog__cards">
                <Card />
            </ul>
        </>
    )
}