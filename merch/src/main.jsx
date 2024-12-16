import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './output.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Busket from './pages/Busket';
import Socks from './pages/Socks';
import TShirts from './pages/TShirts';
import Hoodies from './pages/Hoodies';
import Caps from './pages/Caps';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainBlock from './components/MainBlock';
import TShirtCard from './components/TShirtCard';
import TShirtSection from './components/TShirtSection';
import TShirtCarousel from './components/TShirtCarousel';
import Discount from './components/Discount';
import OurAdvantages from './components/AdvantagesBlock';
import FooterMerchStore from './components/FooterMerchStore';
import Admin from './components/Admin';
import CartPage from './pages/CartPage'; 
import WishlistPage from './pages/WishlistPage'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainBlock />
        <TShirtCard />
        <TShirtSection /> 
        <TShirtCarousel />
        <Discount />
        <OurAdvantages />
        <FooterMerchStore />
        <Admin />
        
      </>
    ),
  },
  {
    path: "/tshirts",
    element: <TShirts />,
  },
  {
    path: "/socks",
    element: <Socks />,
  },
  {
    path: "/hoodies",
    element: <Hoodies />,
  },
  {
    path: "/caps",
    element: <Caps />,
  },
  {
    path: "/cart", 
    element: <CartPage />,
  },
  {
    path: "/wishlist", 
    element: <WishlistPage />,
  },
  {
    path: "/busket", 
    element: <Busket />,
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




