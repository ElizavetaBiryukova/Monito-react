import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'
import { Cards, CardsProducts } from './types/types'

type AppProps = {
  cards: Cards,
  cardsProducts: CardsProducts
}

function App({cards, cardsProducts}: AppProps) {

  return (
    <>
      <Header />
      <Main 
      cards = {cards}
      cardsProducts= {cardsProducts}
      />
      <Footer />
    </>
  )
}

export default App
