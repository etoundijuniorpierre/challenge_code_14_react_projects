import './App.css';
import img from "./profil.png";
import { useState } from 'react';

function App() {

  const [valeurinput1, setvaleurinput1] = useState("");
  const [valeurinput2, setvaleurinput2] = useState("");
  const [containeranimation, setcontaineranimation] = useState("");
  const [imganimation, setimganimation] = useState("");
  const [hideContainer, setHideContainer] = useState(false);
  const [bordeur, setBordeur] = useState({ height: "200px", width: "200px", border: "7px solid black", });
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const changeVal1 = (e) => {
    setvaleurinput1(e.target.value);
  };

  const changeVal2 = (e) => {
    setvaleurinput2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", valeurinput1, "Password:", valeurinput2);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      animationelem();
    }
  };

  const animationelem = () => {
    if (valeurinput1.length >= 12 && valeurinput2.length >= 8) {
      setvaleurinput1("");
      setvaleurinput2("");
      setcontaineranimation('containerstyle');
      setimganimation('img');

      setTimeout(() => {
        setHideContainer(true);
      }, 5200);

      setBordeur({ height: "200px", width: "200px", border: "7px solid black", });
    } else {
      console.log("Invalid email or password.");
      setBordeur({ height: "200px", width: "200px", border: "7px solid red", });
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {!hideContainer && (
          <div className={containeranimation}
            style={{
              height: "90%",
              width: "250px",
              padding: "20px 50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={imganimation}
              style={bordeur}  
            >
              <img src={img} alt="profil"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>

            <div className="form"
              style={{
                width: "300px",
                height: "300px",
                border: "1px solid transparent",
                borderRadius: "7px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
            >
              <form onSubmit={handleSubmit}
                style={{
                  width: "100%",
                  height: "75%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <caption><h2>Login</h2></caption>

                <div className="input" style={{ width: "60%", height: "45%", marginTop: "-27px", marginLeft: "37px" }}>
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    onFocus={() => setIsFocused1(true)}
                    onBlur={() => setIsFocused1(false)}
                    style={{
                      width: "70%",
                      outline: "none",
                      borderRadius: "5px",
                      padding: '4px 0px 4px 10px',
                      marginBottom: "17px",
                      border: isFocused1 ? '2px solid blue' : '1px solid gray',
                    }}
                    onChange={changeVal1}
                    value={valeurinput1}
                    onKeyDown={handleEnter}  
                  />
                  <br />
                  <label htmlFor="pwd">Password</label>
                  <br />
                  <input
                    type="password"
                    id="pwd"
                    onFocus={() => setIsFocused2(true)}
                    onBlur={() => setIsFocused2(false)}
                    style={{
                      width: "70%",
                      border: isFocused2 ? '2px solid blue' : '1px solid gray',
                      outline: "none",
                      borderRadius: "5px",
                      padding: '4px 0px 4px 10px',
                    }}
                    onChange={changeVal2}
                    value={valeurinput2}
                    onKeyDown={handleEnter}  
                  />
                  <br />
                </div>

                <input type="submit"
                  onClick={animationelem}
                  value="Submit"
                  style={{
                    width: "75%",
                    padding: "4px",
                    color: "#fff",
                    fontWeight: "400",
                    background: "black",
                    border: "1px solid transparent",
                    borderRadius: "5px"
                  }}
                />
              </form>

              <div className="link" style={{
                width: "100%",
                height: "25%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <a href="#f" style={{ fontWeight: "900", marginLeft: "30px" }}>Don't have an account</a>
                <br />
                <a href="#f" style={{ textAlign: "right", color: "#000", fontWeight: "900", padding: "0px 37px 37px 0px" }}>Register</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
