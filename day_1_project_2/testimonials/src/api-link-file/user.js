import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (

    <div>
      <div className='colorh2title'>
            <h2>Users</h2>
            </div>

      {data.map((item) => (
        <div key={item.id} style={{border:"1px solid transparent", color:"#fff", fontSize:"16px", fontWeight:"500", background:"#fff", borderRadius:"8px", marginBottom:"20px", display:"flex",  justifyContent:"space-between", flexDirection:"column" }}>
          <h2 style={{height:"100%" ,border:"1px solid rgb(119, 44, 242)", color:"#fff", fontSize:"16px", background:"rgb(119, 44, 242)", padding:"6px", marginTop:"0.7px", overflow:"hidden", borderRadius:"8px 8px 0px 0px"}}>{item.name}</h2>
          <p style={{height:"100%" , border:"1px solid rgb(119, 44, 242)", color:"#fff", fontSize:"12px", background:"rgb(119, 44, 242)", padding:"6px", marginBottom:"-0.7px", borderRadius:"0px 0px 8px 8px"}}>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ApiComponent;
