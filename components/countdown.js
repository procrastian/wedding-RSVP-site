import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

const CountdownToSpecificDate = ({ date }) => {
  const [remainingTime, setRemainingTime] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(new Date(date) - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Countdown date={date} renderer={({ days, hours, minutes }) => (
      <div>
        <p>{days} days {hours} hours and {minutes} minutes to go!</p>
      </div>
    )} />
  );
};

export default CountdownToSpecificDate;