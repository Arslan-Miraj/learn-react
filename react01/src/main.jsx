import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import App, { Desc } from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
)

const desc = createRoot(document.getElementById('desc'));
desc.render(
  <Desc />
)



