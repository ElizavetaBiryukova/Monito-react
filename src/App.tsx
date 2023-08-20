import { useState, useEffect } from 'react';
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
import { Curr } from './types/types';
import axios from 'axios';

type AppProps = {
  cards: Cards;
  cardsProducts: CardsProducts;
  cardsKnowledge: CardsKnowledge;
  cardsSeeMore: Cards;
}

interface RateListI {
  currencyList: Array<Curr>,
}

enum AppRoute {
  Main = '/',
  Card = '/card/:cardId',
}

function App({ cards, cardsProducts, cardsKnowledge, cardsSeeMore }: AppProps) {
  const [rateList, setRateList] = useState<RateListI>({
    currencyList: [],
  })

  const [сurrensy, setCurrensy] = useState<Currensy>({
    image: Vnd,
    name: 'VND',
  });

  let indexCurr: number = 1;

  Object.entries(rateList.currencyList)?.map(currency => {
    if (сurrensy.name === 'VND') {
      indexCurr = currency[1].VND.Value;
    } else if (сurrensy.name === 'USD') {
      indexCurr = currency[1].VND.Value;
    } else if (сurrensy.name === 'RU') {
      indexCurr = 1;
    }
  })

  useEffect(() => {
    const promise = axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    promise.then((res) => {
      const rates = res.data
      setRateList({
        currencyList: [rates.Valute],
      })
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage
        cards={cards}
        cardsProducts={cardsProducts}
        cardsKnowledge={cardsKnowledge}
        сurrensy={сurrensy}
        setCurrensy={setCurrensy}
        indexCurr={indexCurr}
      />,
    },
    {
      path: AppRoute.Card,
      element: <PetsPage
        cardsSeeMore={cardsSeeMore}
        сurrensy={сurrensy}
        setCurrensy={setCurrensy}
        indexCurr={indexCurr}
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
