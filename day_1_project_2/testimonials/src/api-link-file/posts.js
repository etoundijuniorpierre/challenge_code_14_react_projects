import React, { useState, useEffect } from 'react';

const ApiComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div style={{marginLeft:"5px"}}>
            <div className='colorh2title'>
            <h2>Posts</h2>
            </div>

            {data.map((item) => (
                <div key={item.id} style={{border:"1px solid violet", paddingLeft:"15px", width:"99.5%", marginBottom:"25px", borderRadius:"6px", boxShadow:"3px 1px 8px 0.1px #777"}}>
                    <p style={{fontSize:"16px"}}>{item.title}
                        <br />
                        <span style={{color:"#777", fontSize:"14px"}}>
                        {item.body}
                        </span>
                    </p>

                </div>
            ))}
        </div>
    );
};

export default ApiComponent;