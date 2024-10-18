import React, { useState, useEffect } from "react";
import Button from "./Button";
import { CurrencyContext } from "../context/currencies-context";

export default function Courses({ course }) {
  const currency = React.useContext(CurrencyContext);
  const { title, img, price } = course;

  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(price * currency.conversionRate);

  const [courseBg, setCourseBg] = useState({});

  useEffect(() => {
    // Dynamically setting the background color based on currency
    if (currency.code === "USD") {
      setCourseBg({ background: "rgb(194, 38, 38)" });
    } else if (currency.code === "EUR") {
      setCourseBg({ background: "black" });
    } else if (currency.code === "GBP") {
      setCourseBg({ background: "rgb(38, 100, 194)" });
    }
  }, [currency.code]);

  return (
    <li
      className="card mb-2"
      style={{
        width: 250,
        border: `1px solid ${courseBg.background}`,
        borderRadius: "10px",
        overflow:'hidden'
      }}
    >
      <div
        className="card-header"
        style={{
          ...courseBg,
          padding: "15px",
          color: "white", 
        }}
      >
        {title}
      </div>

      <img
        src={img}
        alt="course img"
        style={{ height: "200px", width: "100%" }}
      />

      <p
        className="card-body"
        style={{
          padding: "15px",
          background: "rgba(0, 0, 0, 0.1)",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae
        dicta sit saepe! Dolores voluptatem laborum provident eos nemo dolorem
        eius corporis laudantium voluptate! Neque aliquid dignissimos ducimus
        voluptatum ea?
      </p>

      <div
        className="card-footer d-flex space-between"
        style={{
          ...courseBg,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginTop:'-15px'
        }}
      >
        <h4>{contextPrice}</h4>
        <Button btnClass={"btn-success"} text={"BUY"} style={{ background: "red", }} />
      </div>
    </li>
  );
}
