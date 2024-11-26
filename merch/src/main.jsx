import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPage from './pages/NewPage';
import MainBlock from './components/MainBlock';
import Discount from './components/Discount';
import TShirtCard from './components/TShirtCard';
import TShirtCarousel from './components/TShirtCarousel';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainBlock />
        <Discount />
        <TShirtCard />
        <TShirtCarousel />
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




