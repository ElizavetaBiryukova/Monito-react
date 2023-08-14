import { HeaderPets } from '../header-pets/header-pets'
import { Footer } from '../footer/footer'
import { Customers } from '../customers/customers'
import { SeeMore } from '../see-more/see-more'
import { Cards } from "../../types/types"
import { Pet } from '../pet/pet'

type PetsPageProps = {
    cardsSeeMore: Cards;
}


export function PetsPage( {cardsSeeMore}: PetsPageProps): JSX.Element {
    return (
        <>
            <HeaderPets />
            <main className="main">
                <h1 className="visually-hidden">Monito - pet shop, product detail</h1>
                <Pet />
                <Customers />
                <SeeMore cardsSeeMore={cardsSeeMore}/>
            </main>
            <Footer />
        </>
    )
}