import { useState } from 'react';
import Sub from './state/sub.js';
import Unsub from './state/unsub.scss'

function App() {

  const styleContainer = {
    height: "100vh",
    width: "100%",
    background: "#888",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const styleBox = {
    marginTop: "50px",
    height: "auto",
    width: "280px",
    borderRadius: "8px",
    padding: "0px 15px 25px 15px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'start',
  };

  const styleboxBtn = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:"20px"
  };

  const styleBtn = {
    padding: "3px 15px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid rgba(255, 255, 255, 0.9)",
    boxShadow: "1px 1px 1.5px 0.5px black",
    cursor: "pointer"
  };

  const [currentstate, setcurrentstate] = useState(false);

  const subscribe = () => {
    setcurrentstate(true);
  };

  return (
    <>
      <div className="container" style={styleContainer}>
        {!currentstate && (
          <div className="box" style={styleBox}>
            <div className="txt" style={{ marginTop: "-10px", padding: "0" }}>
              <h2 style={{marginBottom:"-10px"}}>Hello</h2>
              <p>Would you like to subscribe?</p>
            </div>

            <div className="boxbtn" style={styleboxBtn}>
              <button style={{ ...styleBtn, background: "white" }} id='cancel'>Cancel</button>
              <button style={{ ...styleBtn, Unsub}} id='sub' onClick={subscribe}>Subscribe</button>
            </div>
          </div>
        )}

        {currentstate && <Sub />}
      </div>
    </>
  );
}

export default App;
