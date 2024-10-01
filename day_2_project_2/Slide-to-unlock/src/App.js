import React, { useState } from "react"; 
import Moon from './page/moon.jpg'; 
import Img from './page/img.jpg'; 
import './page/style.scss'; 
import Svg from './page/locked.svg'; 


function Unlock() {
  const [rangeValue, setRangeValue] = useState(0); 

  const [firstAspect, setfirstAspect] = useState(
    {
      Img1:`url(${Moon}) no-repeat center/cover`,
      Img2:`url(${Img}) no-repeat center/cover`,
      txt1:"Unlock screen",
      txt2:"Lock screen"
    }
  ); 

  const [secondAspect, setsecondAspect] = useState(true);


  const aspectChange = (e) => {
    let value = parseInt(e.target.value)
      setRangeValue(value);
      console.log(value)
      

      if (value >= 100) {
        setTimeout(() => {
          setsecondAspect(false);
        }, 400); 
      }
    };



    const lockChange = () => {
      setTimeout(() => {
        setsecondAspect(true)
        setRangeValue(0)
      }, 400); 
    


    
  }


  return (
    <div
      style={{
        width: "280px",
        height: "650px",
        border: "4px solid black",
        borderRadius: "15px",
        background: secondAspect ? firstAspect.Img1 : firstAspect.Img2,  
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px"
      }}
    >

          

      <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>
      {secondAspect ? (firstAspect.txt1) : (firstAspect.txt2)}
    </h1>


    <div>
        {secondAspect ? (
          <input
            type="range"
            min="0"
            max="100"
            value={rangeValue}
            id="myRange"
            onChange={aspectChange}
          />
        ) : (
          <img
            src={Svg}
            alt="Locked"
            id="svg"
            onClick={lockChange}
          />
        )}
      </div>



    </div>
  );
}

export default Unlock;
