import { useState, useEffect } from "react";

const CounterBox = ({ targetNumber, label, delay }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const incrementTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div
      className="bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-sm text-center opacity-0 animate-fadeInUp"
      style={{
        animationDelay: `${0.5 + delay}s`,
        animationFillMode: "forwards",
      }}
    >
      <span className="text-3xl md:text-4xl font-Garet block mb-1">
        {count}+
      </span>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );
};

export default CounterBox;
