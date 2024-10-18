import React from "react";
import Course from "./Course";

export default function Courses({ list }) {
    return (
        <ul className="d-flex mt-2" style={{ display: "flex", flexWrap: "wrap",justifyContent : "center", alignItems:"center" , gap: 30, listStyle:"none" }}>
            {list.map((item) => (
                <Course key={item.id} course={item} />
            ))}

           
        </ul>
    );
}