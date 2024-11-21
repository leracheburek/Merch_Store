import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import Header from './components/Header'
import Discount from './components/Discount'
import MainBlock from './components/MainBlock'
import OurAdvantages from './components/AdvantagesBlock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainBlock />
    <Discount />
    <OurAdvantages />
  </StrictMode>,
)
