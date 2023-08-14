import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './components/main-page/main-page';
import { Cards, CardsKnowledge, CardsProducts } from './types/types'
import { PetsPage } from './components/pets-page/pets-page';

type AppProps = {
  cards: Cards,
  cardsProducts: CardsProducts
  cardsKnowledge: CardsKnowledge
  cardsSeeMore: Cards,
}

enum AppRoute {
  Main = '/',
  Card = '/card/:cardId',
}



function App({ cards, cardsProducts, cardsKnowledge, cardsSeeMore }: AppProps) {

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage
        cards={cards}
        cardsProducts={cardsProducts}
        cardsKnowledge={cardsKnowledge}
      />,
    },
    {
      path: AppRoute.Card,
      element: <PetsPage 
      cardsSeeMore={cardsSeeMore}
      />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
