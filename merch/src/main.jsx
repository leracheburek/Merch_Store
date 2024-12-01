

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPage from './pages/NewPage';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import TShirtCard from './components/TShirtCard';
import TShirtCarousel from './components/TShirtCarousel';
import Discount from './components/Discount';
import OurAdvantages from './components/AdvantagesBlock';
import FooterMerchStore from './components/FooterMerchStore';
import Admin from './components/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainBlock />
        <TShirtCard />
        <TShirtCarousel />
        <Discount />
        <OurAdvantages />
        <FooterMerchStore />
        <Admin />
      </>
    ),
  },
  {
    path: "/new-page",
    element: <NewPage />, 
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);




