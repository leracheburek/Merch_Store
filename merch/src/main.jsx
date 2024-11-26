
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import Header from './components/Header'
import Discount from './components/Discount'
import TShirtCard from './components/TShirtCard'
import TShirtCarousel from './components/TShirtCarousel'
import MainBlock from './components/MainBlock'
import OurAdvantages from './components/AdvantagesBlock'
import FooterMerchStore from './components/FooterMerchStore'
import Admin from './components/Admin'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainBlock />
    <TShirtCard />
    <TShirtCarousel />
    <Discount />
    <OurAdvantages />
    <FooterMerchStore />
    <Admin />
  </StrictMode>,
);