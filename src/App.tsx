import { useState } from 'react';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './components/main-page/main-page';
import { Cards, CardsKnowledge, CardsProducts } from './types/types'
import { PetsPage } from './components/pets-page/pets-page';
import { Currensy } from './types/types';
import Vnd from './assets/images/currency/vnd.svg';

type AppProps = {
  cards: Cards;
  cardsProducts: CardsProducts;
  cardsKnowledge: CardsKnowledge;
  cardsSeeMore: Cards;
}

enum AppRoute {
  Main = '/',
  Card = '/card/:cardId',
}

function App({ cards, cardsProducts, cardsKnowledge, cardsSeeMore }: AppProps) {

  const [сurrensy, setCurrensy] = useState<Currensy>({
    image: Vnd,
    name: 'VND',
  });

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage
        cards={cards}
        cardsProducts={cardsProducts}
        cardsKnowledge={cardsKnowledge}
        сurrensy={сurrensy}
        setCurrensy={setCurrensy}
      />,
    },
    {
      path: AppRoute.Card,
      element: <PetsPage
        cardsSeeMore={cardsSeeMore}
        сurrensy={сurrensy}
        setCurrensy={setCurrensy}
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
