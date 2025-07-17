import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 27,
    seconds: 43
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "DIAS" },
    { value: timeLeft.hours, label: "HORAS" },
    { value: timeLeft.minutes, label: "MIN" },
    { value: timeLeft.seconds, label: "SEG" }
  ];

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      {timeUnits.map((unit, index) => (
        <motion.div 
          key={index}
          className="bg-white/20 rounded-xl p-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div 
            className="text-2xl md:text-3xl font-bold"
            key={unit.value} // This will trigger animation when value changes
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {String(unit.value).padStart(2, '0')}
          </motion.div>
          <div className="text-xs md:text-sm">{unit.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
