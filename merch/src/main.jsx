import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Discount from './components/Discount';
import TShirtCard from './components/TShirtCard';
import TShirtCarousel from './components/TShirtCarousel';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Discount />
    <TShirtCard />
    <TShirtCarousel />
  </StrictMode>,
);