import './App.css'
import { Header } from './components/header/header'
import { Main } from './components/main/main'
import { Footer } from './components/footer/footer'
import { Cards } from './types/types'

type AppProps = {
  cards: Cards
}

function App({cards}: AppProps) {

  return (
    <>
      <Header />
      <Main 
      cards = {cards}
      />
      <Footer />
    </>
  )
}

export default App
