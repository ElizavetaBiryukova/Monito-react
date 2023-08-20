import { HeaderPets } from '../header-pets/header-pets'
import { Footer } from '../footer/footer'
import { Customers } from '../customers/customers'
import { SeeMore } from '../see-more/see-more'
import { Cards } from "../../types/types"
import { Pet } from '../pet/pet'
import { Currensy } from '../../types/types';

type PetsPageProps = {
    cardsSeeMore: Cards;
    сurrensy: Currensy;
    setCurrensy: React.Dispatch<React.SetStateAction<Currensy>>;
    indexCurr: number;
}


export function PetsPage({ cardsSeeMore, сurrensy, setCurrensy, indexCurr }: PetsPageProps): JSX.Element {
    return (
        <>
            <HeaderPets
                сurrensy={сurrensy}
                setCurrensy={setCurrensy}
            />
            <main className="main">
                <h1 className="visually-hidden">Monito - pet shop, product detail</h1>
                <Pet
                    сurrensy={сurrensy}
                    indexCurr={indexCurr}
                />
                <Customers />
                <SeeMore
                    cardsSeeMore={cardsSeeMore}
                    сurrensy={сurrensy}
                    indexCurr={indexCurr}
                />
            </main>
            <Footer />
        </>
    )
}