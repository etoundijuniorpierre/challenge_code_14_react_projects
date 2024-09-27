import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
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
            <h2>Comments</h2>
            </div>
            


            {data.map((item) => (
                <div key={item.id} style={{border:"1px solid transparent", color:"#000", fontSize:"16px", fontWeight:"500", background:"#fff", borderRadius:"8px", marginBottom:"18px", display:"flex",  justifyContent:"space-between", flexDirection:"column" }}>
                    <h2 style={{border:"1px solid rgb(119, 44, 242)", color:"#fff", fontSize:"16px", background:"rgb(119, 44, 242)", padding:"10px", marginTop:"0.7px", overflow:"hidden", borderRadius:"8px 8px 0px 0px"}}>{item.name}</h2>
                    <p style={{marginBottom:"2px", marginTop:"-2px", marginLeft: "10px", fontSize:"13px"}} >{item.body}</p>
                    <h2 style={{border:"1px solid rgb(119, 44, 242)", color:"#fff", fontSize:"10px", background:"rgb(119, 44, 242)", padding:"10px", borderRadius:"0px 0px 8px 8px"}}>{item.email}</h2>
                </div>
            ))}
        </div>
    );

};

export default ApiComponent;