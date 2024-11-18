import './style.css';
import CardAdv from '../CardAdvBlock';

function OurAdvantages() {
    return (
        <div id="ouradv">
            <h1 className="header-advblock">НАШІ ПЕРЕВАГИ</h1>
            
            <div className="advantage-block"> 
                <CardAdv
                    title="ДОСТАВКА ПО СВІТУ"
                    description="Здійснюємо доставку ваших замовлень в будь-яку точку планети"
                    additionalText="Умови доставки читайте нижче"
                    imageSrc="./src/assets/img/globe.png"
                    altText="globe"
                    iconClass="icon"
                />
                <CardAdv 
                    title="ЗРОБЛЕНО В УКРАЇНІ"
                    description="Всі товари вироблені в Україні з якісних та натуральних тканин"
                    imageSrc="./src/assets/img/award.png"
                    altText="award"
                    iconClass="iconsecond"
                />
                <CardAdv 
                    title="ЛЕГКИЙ СПОСІБ ОПЛАТИ"
                    description="На сайті доступні різні види оплати. Обирайте зручний спосіб саме для вас"
                    additionalText="Детальніше про способи оплати читайте нижче"
                    imageSrc="./src/assets/img/credit-card-check.png"
                    altText="credit-card-check"
                    iconClass="iconthird"
                />
            </div>
        </div>
    );
}

export default OurAdvantages;
