import React, { useState, useEffect } from 'react';
import './App.scss';
import Cross from './cross.svg';


function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClick = () => {
    setShowPopup(true);
  };

  const btnClick = () => {
    setShowPopup(false);
  };


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);


  const color = () => {
    const red = Math.floor(Math.random() * 245);
    const green = Math.floor(Math.random() * 220);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <>
      <div className='headtext'>
        <h1>Magic Popup App</h1>
        <button onClick={btnClick}>Click me</button>
      </div>

      <div>
        {showPopup ? (
          <div className="container" style={{ opacity: 0 }}>

          </div>
        ) : (
          <div className="container" style={{ opacity: 1, background: color() }}>
            <div className="box">
              <h2>Time out Popup</h2>
              <p>This popup was triggered by a delay</p>
            </div>
            <img
              src={Cross}
              alt="cross Icon"
              className="cross-icon"
              onClick={handleClick}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
