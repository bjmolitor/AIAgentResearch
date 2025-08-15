import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const storedTheme = localStorage.getItem('theme') || 'system'
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (storedTheme === 'dark' || (storedTheme === 'system' && systemPrefersDark)) {
  document.documentElement.classList.add('dark')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
