import './style.css';
import { Countdown } from '../Countdown/index';
import MainButton from '../ButtonMain/index';
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
          <MainButton />
        </div>

      </div>
    </div>
  );
}

export default Discount;
