import React, { useState } from 'react';
import Cross from '../cross.svg';


const Defaults = () => {

  const [liste, setListe] = useState(['Complete all fields', 'Successful login']);


  const handleClick = (item) => {

    const newList = liste.filter((element) => element !== item);
    setListe(newList);
  };

  return (
    <>
      {liste.map((item, index) => (
        <div className={`container box${index + 1}`} key={index}>
          <h2>{item}</h2>
          <p>
            <img
              src={Cross}
              alt="cross Icon"
              className="cross-icon"
              onClick={() => handleClick(item)} 
            />
          </p>
        </div>
      ))}
    </>
  );
};

export default Defaults;
