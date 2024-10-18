import './App.css';
import Lune from './img/lune.png';
import Terre from './img/terre.png';
import Animal from './img/animal.png';
import Fusee from './img/fusée.png';
import { useState } from 'react';

function App() {

  const styleContainer = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    background: "black",
    overflow: "hidden",
  }

  const styleTerreContainer = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }

  const styleBtnContainer = {
    height: "80px",
    width: "80px",
    color: "#fff",
    borderRadius: "100%",
    outline: "none",
    cursor: "pointer",
    border: "1px solid black",
  }

  const styleBoxImg = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const styleFusee = {
    height: "120px",
    width: "120px",
    position: 'absolute',
  }

  const [fuseeClass, setFuseeClass] = useState('');
  const [fuseeVisible, setFuseeVisible] = useState(true);
  
  const [animalVisible, setAnimalVisible] = useState(false);
  const [animalClass, setAnimalClass] = useState("");

  function launcher() {
    setFuseeClass('fuseeImg');

    setTimeout(() => {
      setFuseeVisible(false);
    }, 6000);
  }

  function loader() {
    setAnimalVisible(true);
    setAnimalClass('animalImg');

    launcher()
  }

  return (
    <>
      <div className="container" style={styleContainer}>

        <div className="imgbox" style={{ ...styleBoxImg }}>
          <img src={Lune} alt="Lune" style={{ height: "120px", width: "120px", background: "black", position: "relative" }} />

        </div>

        <div className="terrecontainer" style={styleTerreContainer}>
          <button style={{ ...styleBtnContainer, background: "rgb(238, 77, 77)" }} onClick={launcher}>
            Launch
          </button>

          <div className="imgbox" style={{ ...styleBoxImg }}>
            <img src={Terre} id='terreImg' alt="Terre" style={{ height: "300px", width: "300px", color: "black", position: "relative" }} />
            {fuseeVisible && (
              <img
                src={Fusee}
                alt="Fusée"
                className={fuseeClass}
                style={{ ...styleFusee }}
              />
            )}

            {animalVisible && (
              <img
                src={Animal}
                alt="Animal"
                className={animalClass}
                style={{ height: "100px", width: "100px",...styleFusee }}
              />
            )}
          </div>

          <button style={{ ...styleBtnContainer, background: "rgb(0, 183, 255)" }} onClick={loader}>
            Load
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
