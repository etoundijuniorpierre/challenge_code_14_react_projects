import React, { useState } from "react";
import Courses from "./components/Courses";
import Button from "./components/Button";

import { coursesDb } from "./db/coursesDB";
import { currenciesDB } from "./db/currenciesDb";


import { CurrencyContext } from "./context/currencies-context";
document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";
export default function Store() {
    const [currency, setCurrency] = useState(currenciesDB.Euro)
    return (

        <CurrencyContext.Provider value={currency}>

            <div className="container p-1">
                <h4 className="mb-2">Change currency:</h4>
                {Object.values(currenciesDB).map((cur) => (
                    <Button
                        key={cur.label}
                        text={cur.code}
                        btnClass={"btn-light btn-sm"}
                        OnClick={() => setCurrency(cur)}
                        
                    />
                ))}
                <header className="text-center my-4" style={{textAlign:"center", marginBottom:"35px"}}>
                    <h1 className="title fs-xl" style={{fontWeight:900, fontSize:"50px"}}>Course</h1>
                    <h2 className="text-uppercase mb-2" style={{fontWeight:900, fontSize:"30px"}}>become a web developper</h2>
                    <p className="mx-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quisquam architecto tenetur quas corporis, sunt debitis eaque numquam dolore iste, sit pariatur quae incidunt officiis aliquam nihil rem cum dicta.
                    </p>
                </header>{" "}
                <Courses list={coursesDb} />
            </div>

        </CurrencyContext.Provider>

    );

}