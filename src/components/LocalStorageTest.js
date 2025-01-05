import React, { useEffect } from 'react';

const LocalStorageTest = () => {
  useEffect(() => {
    // Example of using local storage
    localStorage.setItem('prop1', 'red');
    localStorage.setItem('prop2', 'blue');
    localStorage.setItem('prop3', 'magenta');
  }, []);

  return (
    <div>
      <h1>Local Storage Test Page</h1>
      <button className="ls-btn">Click to Set Items in Local Storage</button>
    </div>
  );
};

export default LocalStorageTest;
