import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs when the component mounts

    const timerId = setInterval(() => {
      // This code will run every 1 second
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => {
      // This code will run when the component unmounts
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect only runs on mount and unmount

  return (
    <div>
      <h1>Cleanup Function Example</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default ExampleComponent;
