import './style.css';

function OurAdvantages() {
    return (
        <div id="ouradv">
            <h1 className="header-advblock">НАШІ ПЕРЕВАГИ</h1>
            
            <div className="advantage-block"> 
                <div className="card">
                    <h3 className="headerblock-advblock">ДОСТАВКА ПО СВІТУ</h3>
                    <p className="textmain-advblock">Здійснюємо доставку ваших замовлень в будь-яку точку планети</p>
                    <p className="text-advblock">Умови доставки читайте нижче</p>
                    <img src="./src/assets/img/globe.png" alt="globe" className="icon" />
                </div>
        
                <div className="cardsecond">
                    <h3 className="headerblock-advblock">ЗРОБЛЕНО В УКРАЇНІ</h3>
                    <p className="textmain-advblock">Всі товари вироблені в Україні з якісних та натуральних тканин</p>
                    <img src="./src/assets/img/award.png" alt="award" className="iconsecond" />

                </div>
        
                <div className="cardthird">
                    <h3 className="headerblock-advblock">ЛЕГКИЙ СПОСІБ ОПЛАТИ</h3>
                    <p className="textmain-advblock">На сайті доступні різні види оплати. Обирайте зручний спосіб саме для вас</p>
                    <p className="text-advblock">Детальніше про способи оплати читайте нижче</p>
                    <img src="./src/assets/img/credit-card-check.png" alt="credit-card-check" className="iconthird" />
                </div>
            </div>
        </div>
    );
}  

export default OurAdvantages;