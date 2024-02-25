import React, { useState, useEffect } from 'react';

const HeroCounter = ({ targetCount }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const animationDuration = 130; // 2 seconds
    const totalIncrements = Math.abs(targetCount - counter);
    const incrementAmount = totalIncrements / animationDuration; // Increment per millisecond

    const interval = setInterval(() => {
      setCounter(prevCount => {
        const newCount = prevCount + incrementAmount;
        return newCount > targetCount ? targetCount : newCount;
      });
    }, 1); // Increment every millisecond

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [targetCount, counter]); // Run effect whenever targetCount prop changes

  return (
    <div className='counter-number'>
        {Math.floor(counter + 1).toLocaleString()}
        <i class="fa-solid fa-plus"></i>
    </div>);
};

export default HeroCounter;  