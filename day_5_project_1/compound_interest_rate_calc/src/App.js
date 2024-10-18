import './App.css';
import './index.css';
import { useState, useEffect } from 'react';

function App() {

  const styleContainer = {
    width: "100%",
    height: "98vh",
    background: "blue",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
  }

  const styleboxcontainer = {
    width: "280px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "0px",
    background: "rgb(255, 196, 0)",
    marginTop: "30px",
    paddingTop: "10px",
    borderRadius: "8px",
    boxShadow: "0px 1px 10px 2px #333",
  }

  const styleboxinput = {
    width: "90%",
    height: "85%",
    display: "flex",
    flexDirection: "column",
  }

  const styleinput = {
    outline: "none",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
  }

  const [amountStatte, setamountStatte] = useState("");
  const [montStatte, setmontStatte] = useState("");
  const [rateStatte, setrateStatte] = useState("");
  const [yearStatte, setyearStatte] = useState("");
  const [txtState, settxtState] = useState("");

  useEffect(() => {
    const amount = parseFloat(amountStatte) || 0;
    const monthly = parseFloat(montStatte) || 0;
    const rate = parseFloat(rateStatte) || 0;
    const years = parseFloat(yearStatte) || 0;
  
    if (amount > 0 && monthly > 0) {
    
      if (rate > 0 && years > 0) {
        calculateFutureValue2(amount, monthly, rate, years);
      } else if (rate <= 0 && years <= 0) {
        calculateFutureValue2(amount, monthly, 0, 0);
      } else if (rate > 0 && years <= 0) {
        calculateFutureValue2(amount, monthly, rate, 0);
      }

    } else if (amount > 0 && monthly <= 0 && rate > 0 && years > 0) {
      calculateFutureValue1(amount, rate, years)
    } 
    
    else if (amount > 0 && monthly <= 0 && rate <= 0 && years <= 0) {

      settxtState(amountStatte);
    }
  }, [montStatte, rateStatte, yearStatte, amountStatte]);
  


  const calculateFutureValue2 = (p, pmt, R, T) => {
    const P = parseFloat(p);   // Principal amount
    const PMT = parseFloat(pmt);   // Monthly contribution
    const r = parseFloat(R) / 100;  // Interest rate in decimal
    const n = 12;  // Number of compounding periods per year (monthly)
    const t = parseFloat(T);   // Years of investment

    if(PMT === 0 && P !== 0 && r !== 0 && t !== 0) {
      const FV_total1 = (P * Math.pow(1 + r / n, n * t)).toFixed(2);
      settxtState(FV_total1);
    }else {
      const FV_principal = P * Math.pow(1 + r / n, n * t);
      const FV_contributions = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
      const FV_total2 = (FV_principal + FV_contributions).toFixed(2);
      settxtState(FV_total2);
    }
  
  };

  const calculateFutureValue1 = (p, R, T) => {
    const P = parseFloat(p);   // Principal amount
    const r = parseFloat(R) / 100;  // Interest rate in decimal
    const n = 12;  // Number of compounding periods per year (monthly)
    const t = parseFloat(T);   // Years of investment
    
    const FV_total1 = (P * Math.pow(1 + r / n, n * t)).toFixed(2);
    settxtState(FV_total1);
  
  };



  const amountChange = (e) => {
    setamountStatte(e.target.value);
  };

  const montChange = (e) => {
    setmontStatte(e.target.value);
  };

  const rateChange = (e) => {
    setrateStatte(e.target.value);
  };

  const yearChange = (e) => {
    setyearStatte(e.target.value);
  };

  return (
    <>
      <div className="container" style={styleContainer}>
        <div className='boxcontainer' style={styleboxcontainer}>
          <div className="boxinput" style={styleboxinput}>
            <label htmlFor="amount" id='amount' style={{paddingBottom:"5px", fontWeight:"500"}}>Principle amount $</label>
            <input type="number" id='amount' style={styleinput} onChange={amountChange} />
            <br />

            <label htmlFor="monthly" id='monthly' style={{paddingBottom:"5px", fontWeight:"500"}}>Monthly contribution $</label>
            <input type="number" id='monthly' style={styleinput} onChange={montChange} />
            <br />

            <label htmlFor="rate" id='rate' style={{paddingBottom:"5px", fontWeight:"500"}}>Interest rate %</label>
            <input type="number" id='rate' style={styleinput} onChange={rateChange} />
            <br />

            <label htmlFor="year" id='year' style={{paddingBottom:"5px", fontWeight:"500"}}>Year of investment</label>
            <input type="number" id='year' style={styleinput} onChange={yearChange} />

          </div>

          <div className="boxtxt" style={{ width: "100%", height: "50px", background: "rgb(107, 0, 196)", border: "1px solid black", borderRadius:"0px 0px 8px 8px"}}>
            <p  style={{textAlign:"center", color:"white", fontSize:"22px", paddingRight:"15px", overflow:"auto"}}>
              {txtState}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
