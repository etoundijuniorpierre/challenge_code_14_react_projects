import './App.css';
import Loupe from './loupe.svg';
import React, { useState } from "react"; 

function App() {
  const [firstAspect, setfirstAspect] = useState(true);

  const changebackg = () => {
    setfirstAspect(!firstAspect); 
  };

  const [valueAspect, setvalueAspect] = useState("");

  const aspectChange = (e) => {
    if (e.target.value.length > 0 && e.key === 'Enter') {
      console.log("ok")
      changebackg();  
    }
  };

  return (
    <>
      {firstAspect && (
        <div className='container' style={{
          backgroundColor: 'rgb(172, 12, 212)' 
        }}>
          <img src={Loupe} alt="Loupe icon" id='svg' onClick={changebackg} />
        </div>
      )}

      {!firstAspect && (
        <div className="container"  style={{
          background: 'linear-gradient(0deg, rgba(29,2,27,1) 65%, rgba(38,4,34,1) 75%, rgba(129,28,109,1) 100%)'
        }}>
          <div className='clickbox' onClick={changebackg}>

          </div>
          
          <input type="text" placeholder='Search' id='input' value={valueAspect} onKeyDown={aspectChange}  style={{ padding: "4px" }} onChange={(e) => setvalueAspect(e.target.value)} />
        </div>

      
      
      )}
    </>
  );
}

export default App;
