import './style.css';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRight from '../../assets/img/Arrow 3.png';
import ArrowLeft from '../../assets/img/Arrow 3 (1).png';
import Tshirt1 from '../../assets/img/Rectangle 3.png';
import Tshirt2 from '../../assets/img/Rectangle 3.png';
import Tshirt3 from '../../assets/img/Rectangle 3.png';
import Tshirt4 from '../../assets/img/Rectangle 3.png';
import Tshirt5 from '../../assets/img/Rectangle 3.png';
import Tshirt6 from '../../assets/img/Rectangle 3.png';
import Heart from '../../assets/img/Icon.png';
import Icon1 from '../../assets/img/icon1.png';

const TShirtCarousel = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const tshirts = [
    { id: 1, name: "Класична футболка", price: "550₴", Image: Tshirt1 },
    { id: 2, name: "Класична футболка", price: "550₴", Image: Tshirt2 },
    { id: 3, name: "Класична футболка", price: "550₴", Image: Tshirt3 },
    { id: 4, name: "Класична футболка", price: "550₴", Image: Tshirt4 },
    { id: 5, name: "Класична футболка", price: "550₴", Image: Tshirt5 },
    { id: 6, name: "Класична футболка", price: "550₴", Image: Tshirt6 },
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
      <h2 className="headline">НАШІ ФУТБОЛКИ
        <button onClick={openEmptyPage} className="view-all-btn">
          Дивитись всі
        </button>
      </h2>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1em" }}>
        <button className="carousel-btn"
          onClick={() => carouselRef.current.previous()}>
          <img src={ArrowLeft} alt="Left Arrow" />
        </button>

        <Carousel
          responsive={responsive}
          infinite={true}
          ref={carouselRef}
          showDots={false}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style">

          {tshirts.map((tshirt) => (
            <div key={tshirt.id} className="carousel-item" style={{ textAlign: "center", position: "relative" }}>
              <div style={{ position: "relative" }}>
                <img src={tshirt.Image} style={{ width: 320 }} alt={tshirt.name} />
                
                {/* Іконка сердечка */}
                <button className="heart-icon">
                <img src={Heart} alt="Heart Icon" />
                </button>
              </div>

              {/* Текстова інформація */}
              <p className="shot2">Бавовна</p>
              <div className = 'qwert'>
                <p className="shot">{tshirt.name}</p>
                <button className="cart-icon">
                  <img src={Icon1}  alt="Cart Icon" />
                </button>
              </div>
              <p className="price">{tshirt.price}</p>
            </div>
          ))}
        </Carousel>

        <button
          className="carousel-btn"
          onClick={() => carouselRef.current.next()}>
          <img src={ArrowRight} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};
export default TShirtCarousel;




