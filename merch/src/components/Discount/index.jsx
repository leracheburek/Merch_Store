import './style.css';
import { Countdown } from '../Countdown/index';

function Discount() {
  return (
    <div className="discountWrapper">
      <div className="discountBlock">

        <div className="discountHeader">
          <h2>Розпродаж 11.12</h2>
        </div>

        <div className="discountText">
          <p>Знижка <span>20%</span> на все. Залишилося часу:</p>
        </div>

        <div className="discountTime">
        <Countdown inputDate="2024-12-11T23:59:59" />
        </div>
        
        <div className="discountButton">
          <button type="button" onClick={() => alert('Придбання завершено!')}>
            Придбати
          </button>
        </div>

      </div>
    </div>
  );
}

export default Discount;
