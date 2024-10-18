import Sad from './sad.svg';
import { useState } from 'react';
import Sub from './sub.js'; 
import Unsub from './unsub.scss'
// import { Keyframe } from 'react-native-reanimated';


function Substribe() {

    // const keyframe = new Keyframe({
    //     0: {
    //       transform: [{ translate:'10px' }],
    //     },

    //     100: {
    //         transform: [{ translate: '0px' }],
    //     },
    //   });

    const styleContainer = {
        height: "100vh",
        width: "100%",
        background: "rgb(85, 170, 240)",
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

    const heard = {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
    };

    const styleboxBtn = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "center",
        marginTop:"20px"
    };

    const styleBtn = {
        height: "100%",
        padding: "6px",
        borderRadius: "5px",
        outline: "none",
        border: "1px solid rgba(255, 255, 255, 0.9)",
        boxShadow: "1px 1px 1.5px 0.5px black",
        cursor: "pointer",
    };

    const [currentstate, setcurrentstate] = useState(false);

    const handleUnsubscribe = () => {
        setcurrentstate(true); 
    };

    return (
        <>
            {!currentstate ? (
                  <div className="container" style={{...styleContainer, Unsub, animation: "animeUP 2s ease-out"}}>
                <div className="box2" style={styleBox}>
                    <div className="heard" style={heard}>
                        <div className="txt" style={{ marginTop: "-10px", padding: "0" }}>
                            <h2 style={{marginBottom:"-10px"}}>Sorry</h2>
                            <p>to see you go</p>
                        </div>

                        <img src={Sad} alt="smiley" />
                    </div>

                    <div className="boxbtn" style={styleboxBtn}>
                        <button
                            style={{ ...styleBtn, Unsub}}
                            id='sub'
                            onClick={handleUnsubscribe} 
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

              

                </div>
            ) : (
                <Sub /> 
            )}
        </>
    );
}

export default Substribe;
