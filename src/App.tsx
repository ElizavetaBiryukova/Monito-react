import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'
import { Cards, CardsKnowledge, CardsProducts } from './types/types'

type AppProps = {
  cards: Cards,
  cardsProducts: CardsProducts
  cardsKnowledge: CardsKnowledge
}

function App({cards, cardsProducts, cardsKnowledge}: AppProps) {

  return (
    <>
      <Header />
      <Main 
      cards = {cards}
      cardsProducts= {cardsProducts}
      cardsKnowledge={cardsKnowledge}
      />
      <Footer />
    </>
  )
}

export default App
