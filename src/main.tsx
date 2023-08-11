import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { cards, cardsProducts, cardsKnowledge } from './mocks/cards.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App
      cards={cards}
      cardsProducts={cardsProducts}
      cardsKnowledge={cardsKnowledge}
    />
  </React.StrictMode>,
)
