<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import Discount from './components/Discount'
import MainBlock from './components/MainBlock'
import OurAdvantages from './components/AdvantagesBlock'
import Header from './components/Header'
>>>>>>> 5f21135604d9011c1fcf77a0c03a3369983a6819

import Discount from './components/Discount';
import TShirtCard from './components/TShirtCard';
import TShirtCarousel from './components/TShirtCarousel';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <Discount />
    <TShirtCard />
    <TShirtCarousel />
=======
    <Header />
    <MainBlock />
    <Discount />
    
    <OurAdvantages />
>>>>>>> 5f21135604d9011c1fcf77a0c03a3369983a6819
  </StrictMode>,
);