import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { cards, cardsProducts, cardsKnowledge, cardsSeeMore } from './mocks/cards.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App
      cards={cards}
      cardsProducts={cardsProducts}
      cardsKnowledge={cardsKnowledge}
      cardsSeeMore={cardsSeeMore}
    />
  </React.StrictMode>,
)
