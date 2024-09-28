import React, { useState, useEffect } from 'react';
import './App.scss';
import Default from './state/default';
import State from './state/state';


function App() {
  const [currentAspect, setCurrentAspect] = useState(<Default />);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newState = <State />;
      setCurrentAspect(newState);
    }, 7000); 


    return () => clearTimeout(timeoutId);
  });

  return (
    <div>
      {currentAspect}
    </div>
  );
}

export default App;
