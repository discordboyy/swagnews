import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/style.css"; // основные стили
import "./css/new-style.css"; // основные стили
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
