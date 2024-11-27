import './style.css';
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRight from '../../assets/img/Arrow 3.png';
import ArrowLeft from '../../assets/img/Arrow 3 (1).png';
import Tshirt1 from '../../assets/img/1.png';
import Tshirt2 from '../../assets/img/2.png';
import Tshirt3 from '../../assets/img/3.png';
import Tshirt4 from '../../assets/img/4.png';
import Tshirt5 from '../../assets/img/5.png';
import Tshirt6 from '../../assets/img/6.png';

const TShirtCarousel = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const tshirts = [
    { id: 1, name: "ФУТБОЛКА 1", price: "550₴", Image: Tshirt1 },
    { id: 2, name: "ФУТБОЛКА 2", price: "550₴", Image: Tshirt2 },
    { id: 3, name: "ФУТБОЛКА 3", price: "550₴", Image: Tshirt3 },
    { id: 4, name: "ФУТБОЛКА 4", price: "550₴", Image: Tshirt4 },
    { id: 5, name: "ФУТБОЛКА 5", price: "550₴", Image: Tshirt5 },
    { id: 6, name: "ФУТБОЛКА 6", price: "550₴", Image: Tshirt6 },
  ];

  const openEmptyPage = () => {
    navigate("/new-page");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA", padding: "2em" }}>
      <h2>НАШІ ФУТБОЛКИ</h2>
      <button onClick={openEmptyPage} className="view-all-btn">
        Дивитись всі
      </button>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1em" }}>
        <button
          className="carousel-btn"
          onClick={() => carouselRef.current.previous()}
        >
          <img src={ArrowLeft} alt="Left Arrow" />
        </button>

        <Carousel
          responsive={responsive}
          infinite={true}
          ref={carouselRef}
          showDots={false}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
        >
          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="carousel-item" style={{ textAlign: "center" }}>
              <img src={tshirt.Image} style={{ width: 300 }} alt={tshirt.name} />
              <p style={{ fontSize: 25, textAlign: "left" }}>{tshirt.name}</p>
              <p style={{ fontWeight: "bold", fontSize: 30, textAlign: "left" }}>{tshirt.price}</p>
            </div>
          ))}
        </Carousel>

        <button
          className="carousel-btn"
          onClick={() => carouselRef.current.next()}
        >
          <img src={ArrowRight} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default TShirtCarousel;


