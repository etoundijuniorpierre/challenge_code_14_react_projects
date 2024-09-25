import { useState } from 'react';
import './App.css';

function App() {
  const [currentname, setname] = useState("name");
  const [currentdate, setdate] = useState("date");

  const bord1 = {
    border: '1px solid transparent',
    borderBottom: '1px dashed black', 
    outline: 'none',
    background: 'white',
    // margin: '25px'
  }

  const nameChange = (e) => {
    setname(e.target.value);
  };

  const dateChange = (e) => {
    setdate(e.target.value);
  };

  return (
    <>
      <div className='txt'>
        <h2>{currentname}</h2>
        <h2>{currentdate}</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          <br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className='input'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'space-arround',
          alignItems:'center',
          gap: '250px',
          marginBottom: '100px'
        }}
      >
        <input type="date" onChange={dateChange} style={bord1} />
        <input type="text" onChange={nameChange} style={bord1} />
      </div>
    </>
  );
}

export default App;
