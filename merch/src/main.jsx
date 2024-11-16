import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './output.css';

import Discount from './Discount';
import TShirtCard from './TShirtCard';
import TShirtCarousel from './TShirtCarousel';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Discount />
    <TShirtCard />
    <TShirtCarousel />
  </StrictMode>,
);