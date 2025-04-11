import React, { useEffect, useState } from 'react';

export default function Counter({ number, description, className1, className2,myRef,visible }) {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            if(number>1000){
            return prevCount + 29;
            }else{
            return prevCount + 3;
            }
          } else {
            clearInterval(intervalId);
            return number; // Ensure the count matches the target number
          }
        });
      }, 50);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Cleanup the interval on component unmount or `running` change
      }
    };
  }, [running, number]); // Re-run the effect if `running` or `number` changes

  useEffect(() => {
    // Automatically start the counter when `number` is set
    if (visible) {
      setRunning(true);
    }
  }, [number,visible]);

  return (
    <div ref={myRef} className="text-right md:flex md:justify-around">
      <p className={className1}>+{count}</p>
      <p className={className2}>{description}</p>
    </div>
  );
}