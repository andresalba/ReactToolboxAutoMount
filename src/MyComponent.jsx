import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component mounted');
    alert('Component mounted');
    return () => {
      console.log('Component unmounted');
      alert('Component unmounted');
    };
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <p>This component will unmount shortly.</p>
    </div>
  );
}

export default MyComponent;
