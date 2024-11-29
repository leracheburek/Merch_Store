import { useState, useEffect } from "react";
import "./Countdown.css";

export const Countdown = ({ inputDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date(inputDate);
      const currentDate = new Date();
      const totalSeconds = Math.max(0, (targetDate - currentDate) / 1000);

      setMinutes(formatTime(Math.floor((totalSeconds / 60) % 60)));
      setSeconds(formatTime(Math.floor(totalSeconds % 60)));
    }, 1000);

    return () => clearInterval(interval);
  }, [inputDate]);
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="countdown-container">
      <div className="countdown-values">
        <div className="countdown-value">
          <p className="big-text">{days}</p>
          <span>Днів</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{hours}</p>
          <span>Годин</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{minutes}</p>
          <span>Хвилин</span>
        </div>
        <div className="countdown-value">
          <p className="big-text">{seconds}</p>
          <span>Секунд</span>
        </div>
      </div>
    </div>
  );
};
