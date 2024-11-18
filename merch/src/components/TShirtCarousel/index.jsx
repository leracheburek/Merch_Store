import './style.css';
const TShirtCarousel = () => {
    const tshirts = [
        { id: 1, name: 'Футболка 1', price: '550₴' },
        { id: 2, name: 'Футболка 2', price: '550₴' },
        { id: 3, name: 'Футболка 3', price: '550₴' },
    ];

    return (
        <div>
            <h2 className='headline'>НАШІ ФУТБОЛКИ</h2>
            <button className="view-all-btn">Дивитись всі</button>
            <div className="carouselButtons">
                <button className="carousel-btn">←</button>
                <div className="carouselwithT-shirts">
                    {tshirts.map(tshirt => (
                        <div key={tshirt.id} style={{ textAlign: 'center' }}>
                            <img src="./src/assets/img/image.png" alt={tshirt.name} className="clothes" />
                            <p className='productName'>{tshirt.name}</p>
                            <p className="producPrice">{tshirt.price}</p>
                        </div>
                    ))}
                </div>
                <button className="carousel-btn">→</button>
            </div>
        </div>
    );
};

export default TShirtCarousel;