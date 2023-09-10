import React, { useCallback, useState } from "react";

const SecondComponent = (props) => {
  const planArrays = [
    {
      plan: "Arcade",
      image: "../images/icon-arcade.svg",
      priceMonthly: 9,
      priceYearly: 90,
    },
    {
      plan: "Advance",
      image: "../images/icon-advanced.svg",
      priceMonthly: 12,
      priceYearly: 120,
    },
    {
      plan: "Pro",
      image: "../images/icon-pro.svg",
      priceMonthly: 15,
      priceYearly: 150,
    },
  ];


  return (
    <section className="second-component">
      <div className="headings">
        <h1 className="heading-info">Select your plan</h1>
        <p className="paragraph-info">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="card-container">
        {planArrays.map((item, index) => (
          <label
            htmlFor={item.plan}
            key={index}
            onClick={() => props.addItems(item)}
            className={props.plan === item.plan ? "active" : "card"}
          >
            <input
              onChange={props.selectPlan}
              type="radio"
              value={item.plan}
              name="plan"
              id={item.plan}
            />
            <img src={item.image} alt="" />

            <div className="labels">
              <h1 className="plan-name">{item.plan}</h1>
              <p className="plan-price">
                ${props.yearly ? item.priceYearly : item.priceMonthly}/{" "}
                {props.yearly ? "yr" : "mo"}
              </p>
              {props.yearly && <p className="free">2 months free</p>}
            </div>
          </label>
        ))}
      </div>

      <div className="toggle">
        <p>Monthly</p>
        <label className="toggle-button">
          <input
            checked={props.yearly}
            onChange={() => props.setYearly((prev) => !prev)}
            type="checkbox"
          />
          <span className="knob"></span>
        </label>
        <p>Yearly</p>
      </div>
    </section>
  );
};

export default SecondComponent;
