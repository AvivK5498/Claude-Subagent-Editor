import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Agentation } from 'agentation'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Agentation />
  </React.StrictMode>,
)
