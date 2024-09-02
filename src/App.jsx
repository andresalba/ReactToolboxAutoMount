import React, { useState, useEffect } from 'react';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  const [isMounted, setIsMounted] = useState(true);

  // Automatically unmount the component after a short delay (e.g., 0 milliseconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(false);
    }, 3000); // Adjust the delay as needed (0 for immediate unmount)

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="container">
      {isMounted && <MyComponent />}
    </div>
  );
}

export default App;
