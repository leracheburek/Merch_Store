import './style.css';
import React from "react";
import { useNavigate } from "react-router-dom";

const TShirtSection = () => {
  const navigate = useNavigate();

  const openTShirtPage = () => {
    navigate("/TShirts"); 
  };

  return (
    <h2 className="headline">
      НАШІ ФУТБОЛКИ
      <button onClick={openTShirtPage} className="view-all-btn">
        Дивитись всі
      </button>
    </h2>
  );
};

export default TShirtSection;



