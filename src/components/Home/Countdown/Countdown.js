import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = () => {
  const finalAnimationsFolder = "./finalAnimations";
  const days = 5; 
  const initialCountdown = days * 24 * 60 * 60;
  const [countdown, setCountdown] = useState(initialCountdown);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        }
        return prevCountdown;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);

  }, []);

  const updateCountdown = () => {
    const daysRemaining = Math.floor(countdown / (24 * 60 * 60));
    const hoursRemaining = Math.floor((countdown % (24 * 60 * 60)) / 3600);
    const minutesRemaining = Math.floor((countdown % 3600) / 60);
    const secondsRemaining = countdown % 60;

    return (
      <div id="countdown" className="countdown-container">
        <div className="neon-number dd">{getNeonImage(Math.floor((daysRemaining % 100) / 10))}</div>
        <div className="neon-number dd">{getNeonImage(daysRemaining % 10)}</div>

        <div className="neon-number hr">{getNeonImage(Math.floor(hoursRemaining / 10))}</div>
        <div className="neon-number hr">{getNeonImage(hoursRemaining % 10)}</div>

        <div className="neon-number mm">{getNeonImage(Math.floor(minutesRemaining / 10))}</div>
        <div className="neon-number mm">{getNeonImage(minutesRemaining % 10)}</div>

        <div className="neon-number ss">{getNeonImage(Math.floor(secondsRemaining / 10))}</div>
        <div className="neon-number ss">{getNeonImage(secondsRemaining % 10)}</div>
      </div>
    );
  };

  const getNeonImage = (number) => {
    const gifFilename = `${number}.gif`;
    const gifPath = `${finalAnimationsFolder}/${gifFilename}`;
    return <img src={gifPath} alt={formatNumber(number)} />;
  };

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return updateCountdown();
};

export default Countdown;
