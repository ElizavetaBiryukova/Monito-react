import { Header } from '../header/header'
import { Main } from '../main/main'
import { Footer } from '../footer/footer'
import { Cards, CardsKnowledge, CardsProducts } from '../../types/types'

type AppProps = {
    cards: Cards,
    cardsProducts: CardsProducts
    cardsKnowledge: CardsKnowledge
}

export function MainPage({ cards, cardsProducts, cardsKnowledge }: AppProps): JSX.Element {
    return (
        <>
            <Header />
            <Main
                cards={cards}
                cardsProducts={cardsProducts}
                cardsKnowledge={cardsKnowledge}
            />
            <Footer />
        </>
    )
}