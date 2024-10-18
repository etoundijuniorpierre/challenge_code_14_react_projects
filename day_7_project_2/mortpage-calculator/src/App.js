import './App.css';
import { useState } from 'react';

function App() {
  const [homevaleur, sethomevaleur] = useState("");
  const [downvaleur, setdownvaleur] = useState("");
  const [loanvaleur, setloanvaleur] = useState("");
  const [ratevaleur, setratevaleur] = useState("");
  const [yearvaleur, setyearvaleur] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const homefunction = (e) => {
    sethomevaleur(e.target.value);
    calculateLoanAmount(e.target.value, downvaleur); 
  };

  const downfunction = (e) => {
    setdownvaleur(e.target.value);
    calculateLoanAmount(homevaleur, e.target.value); 
  };

  const ratefunction = (e) => {
    setratevaleur(e.target.value);
  };

  const yearfunction = (e) => {
    setyearvaleur(e.target.value);
  };

 
  const calculateLoanAmount = (home, down) => {
    const homeValue = parseFloat(home) || 0;
    const downPayment = parseFloat(down) || 0;

    const loan = homeValue - downPayment;
    setloanvaleur(loan >= 0 ? loan : 0); 
    return loan;
  };


  const calculate = () => {
    const loan = loanvaleur;
    const interestRate = ratevaleur / 100 / 12; 
    const numberOfPayments = yearvaleur * 12; 

    if (loan > 0 && interestRate > 0 && numberOfPayments > 0) {
      const monthlyPayment =
        (loan * interestRate) /
        (1 - Math.pow(1 + interestRate, -numberOfPayments));
      setMonthlyPayment(monthlyPayment.toFixed(4)); 
    } else {
      alert('Veuillez entrer toutes les valeurs.');
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          width: 'auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '100px',
        }}
      >
        <div
          className="boxcalco"
          style={{
            height: '430px',
            width: '410px',
            boxShadow: 'rgba(0, 0, 0, 0.34) 0px 3px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={{ textAlign: 'center', fontSize: '40px' }}>
            Mortgage <br /> Calculator App
          </h1>

          <div
            className="inputcontainer"
            style={{
              textAlign: 'left',
              height: '60%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <div
              className="headerinput"
              style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <div style={{ width: '50%' }}>
                <label htmlFor="numb1">Home value</label>
                <input
                  type="number"
                  id="numb1"
                  className="numb"
                  placeholder="Enter the value of home"
                  onChange={homefunction}
                  style={{ width: '140px' }}
                  value={homevaleur}
                />
              </div>

              <div style={{ width: '50%' }}>
                <label htmlFor="numb2">Down payment</label>
                <input
                  type="number"
                  id="numb2"
                  className="numb"
                  placeholder="Enter your funds"
                  onChange={downfunction}
                  style={{ width: '142px' }}
                  value={downvaleur}
                />
              </div>
            </div>

            <div
              className="maininput"
              style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '10px',
              }}
            >
              <label htmlFor="loan">Loan amount</label>
              <input
                type="number"
                id="loan"
                className="numb"
                placeholder="The calculated amount of loan"
                value={loanvaleur}
                readOnly
              />
            </div>

            <div
              className="footerinput"
              style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'row',
                marginTop: '10px',
              }}
            >
              <div style={{ width: '50%' }}>
                <label htmlFor="rate">Interest Rate %</label>
                <input
                  type="number"
                  id="rate"
                  className="numb"
                  placeholder="Enter your interest rate"
                  onChange={ratefunction}
                  max="100"
                  style={{ width: '140px' }}
                  value={ratevaleur}
                />
              </div>

              <div style={{ width: '50%' }}>
                <label htmlFor="years">Loan Duration (years)</label>
                <input
                  type="number"
                  id="years"
                  className="numb"
                  placeholder="Enter the duration"
                  onChange={yearfunction}
                  style={{ width: '142px' }}
                  value={yearvaleur}
                />
              </div>
            </div>

            <div
              className="boxbtn"
              style={{ width: '300px', display: 'flex', flexDirection: 'column' }}
            >
              <input
                type="button"
                value="Calculate"
                id="calbtn"
                onClick={calculate}
              />
              <br />
              {monthlyPayment ? (
                <div className="field2">Monthly Payment: ${monthlyPayment}</div>
              ) : (
                <div className="field1">Please complete all fields</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
