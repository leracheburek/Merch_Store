import './style.css';

const TShirtCarousel = () => {
    const tshirts = [
        { id: 1, name: 'ФУТБОЛКА 1', price: '550₴' },
        { id: 2, name: 'ФУТБОЛКА 2', price: '550₴' },
        { id: 3, name: 'ФУТБОЛКА 3', price: '550₴' },
    ];

    return (
        <div style={{backgroundColor: '#FAFAFA'}}>
            <h2 style={{ paddingLeft:'2em',fontSize:42,paddingTop:'1em'}}>НАШІ ФУТБОЛКИ</h2>
            <button className="view-all-btn">Дивитись всі</button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <button className="carousel-btn"><img src="./src/assets/img/Arrow 3 (1).png"/></button>
                <div style={{ display: 'flex', gap: '5em'}}>
                    {tshirts.map(tshirt => (
                        <div key={tshirt.id} style={{ textAlign: 'center' }}>
                            <img src="./src/assets/img/image.png" alt={tshirt.name} style={{ width: 380}} />
                            <p style={{fontSize:25,textAlign:'left'}}>{tshirt.name}</p>
                            <p style={{ fontWeight: 'bold', fontSize:30,textAlign:'left' }}>{tshirt.price}</p>
                        </div>
                    ))}
                </div>
                <button className="carousel-btn"><img src="./src/assets/img/Arrow 3.png"/></button>
            </div>
        </div>
    );
};

export default TShirtCarousel;

