import Smile from './smile.svg';
import { useState } from 'react';
import Unsub from './unsub.js'; 

function Substribe() {

    const styleContainer = {
        height: "100vh",
        width: "100%",
        background: "rgba(132, 221, 202, 0.5)",
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
        justifyContent: "center",
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
                <div className="container" style={styleContainer}>

       
                <div className="box2" style={styleBox}>
                    <div className="heard" style={heard}>
                        <div className="txt" style={{ marginTop: "-10px", padding: "0" }}>
                            <h2 style={{marginBottom:"-10px"}}>Thank you</h2>
                            <p>for your subscription</p>
                        </div>

                        <img src={Smile} alt="smiley" />
                    </div>

                    <div className="boxbtn" style={styleboxBtn}>
                        <button
                            style={{ ...styleBtn, Unsub, width:"100%" }}
                            id='sub'
                            onClick={handleUnsubscribe} 
                        >
                            Unsubscribe
                        </button>
                    </div>
                </div>
                </div>
            ) : (
                <Unsub /> 
            )}
        </>
    );
}

export default Substribe;
