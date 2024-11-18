
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import TShirtCard from './components/TShirtCard';
import TShirtCarousel from './components/TShirtCarousel';
import Discount from './components/Discount';
import OurAdvantages from './components/AdvantagesBlock';

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainBlock />
    <TShirtCard />
    <TShirtCarousel />
    <Discount />
    <OurAdvantages />
  </StrictMode>,
);