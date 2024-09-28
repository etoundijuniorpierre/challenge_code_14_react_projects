import React, { useState } from 'react';
import Cross from '../cross.svg';

const Defaults = () => {
  const [liste, setListe] = useState(['Complete all fields', 'Successful login', 'Hide Alert after delay']);


  const handleClick = (index) => {
    if (liste.length <= 2) {
      setListe([]);
    } else {
      const newList = [...liste]; 
      newList.splice(index, 1);
      setListe(newList);
    }
  };

  return (
    <>
      {liste.length > 0 ? (
    <>
          <div className="container box1">
            <h2>{liste[0]}</h2>
            <p>
              <img
                src={Cross}
                alt="cross Icon"
                className="cross-icon"
                onClick={() => handleClick(0)} 
              />
            </p>
          </div>

          {liste[1] && (
            <div className="container box2">
              <h2>{liste[1]}</h2>
              <p>
                <img
                  src={Cross}
                  alt="cross Icon"
                  className="cross-icon"
                  onClick={() => handleClick(1)} 
                />
              </p>
            </div>
          )}

          {liste[2] && (
            <div className="container box3">
              <h2>{liste[2]}</h2>
              <p>
                <img
                  src={Cross}
                  alt="cross Icon"
                  className="cross-icon"
                  onClick={() => handleClick(2)} 
                />
              </p>
            </div>
          )}
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Defaults;
