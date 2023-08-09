import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { cards, cardsProducts } from './mocks/cards.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App
      cards={cards}
      cardsProducts={cardsProducts}
    />
  </React.StrictMode>,
)
