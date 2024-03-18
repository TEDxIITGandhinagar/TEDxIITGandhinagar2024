import React, { useEffect, useState, useRef } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const spanRefs = useRef([]);

  useEffect(() => {
    let d = new Date();
    d = new Date(d.getFullYear(), d.getMonth() + 1, 1, 0, 10, 0) - d;
    const s = [1000, 60, 60, 24];

    const vset = (e, t, c) => {
      const m = c ? t % c : t;
      if (e) {
        e.setAttribute('b', m < 10 ? '0' + m : m);
        e.classList.remove('ping');
        setTimeout(() => e.classList.add('ping'), 10);
      }
      return m;
    };

    const calc = (t, i = 0, b = 0) => {
      if (!s[i]) return;
      t = opti(t, s[i]);
      if (vset(spanRefs.current[i], t, s[i + 1]) === s[i + 1] - 1 || b) calc(t, i + 1, b);
    };

    const count = (b = 0) => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1000);
      calc(timeLeft, 0, b);
    };

    const opti = (v, n) => (v - (v % n)) / n;

    const interval = setTimeout(() => !count(1) && setInterval(count, 1000), d % 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="countdown">
      {['Days', 'Hrs', 'Min', 'Sec'].map((t, index) => (
        <div className="counter" key={index}>
          <span ref={ref => spanRefs.current[index] = ref} b="--"></span>
          <b>{t}</b>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
