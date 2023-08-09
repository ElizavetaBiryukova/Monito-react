import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { cards } from './mocks/pets-cards'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App
      cards={cards}
    />
  </React.StrictMode>,
)
