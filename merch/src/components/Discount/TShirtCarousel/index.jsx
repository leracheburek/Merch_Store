import './style.css';
import React, { useState } from 'react';

const TShirtCarousel = () => {
    const tshirts = [
        { id: 1, name: 'ФУТБОЛКА 1', price: '550₴', image: './src/assets/img/image.png'},
        { id: 2, name: 'ФУТБОЛКА 2', price: '550₴', image: './src/assets/img/image.png'},
        { id: 3, name: 'ФУТБОЛКА 3', price: '550₴', image: './src/assets/img/image.png'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? tshirts.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === tshirts.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={{ backgroundColor: '#FAFAFA' }}>
            <h2 className='headline'>НАШІ ФУТБОЛКИ</h2>
            <button className="view-all-btn">Дивитись всі</button>

            <div className='carouselButtons'>
                <button className="carousel-btn" onClick={handleLeftClick}>
                    <img src="./src/assets/img/Arrow 3 (1).png" />
                </button>

                <div className='carouselwithT-shirts'>
                    <div key={tshirts[currentIndex].id} style={{ textAlign: 'center' }}>
                        <img src={tshirts[currentIndex].image} alt={tshirts[currentIndex].name} className='clothes'></img>
                        <p className='productName'>{tshirts[currentIndex].name}</p>
                        <p className='producPrice'>{tshirts[currentIndex].price}</p>
                    </div>
                </div>

                <button className="carousel-btn" onClick={handleRightClick}>
                    <img src="./src/assets/img/Arrow 3.png" />
                </button>
            </div>
        </div>
    );
};

export default TShirtCarousel;
