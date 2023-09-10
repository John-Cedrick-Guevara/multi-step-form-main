import React from "react";
import SecondComponent from "./secondComponent";

import App from "../src/App";


const FourthComponent = (props) => {
  return (
    <section className="fourth-component">
      <div className="headings">
        <h1 className="heading-info">Finishing up</h1>
        <p className="paragraph-info">
          Double-check everything looks OK before comfirming.
        </p>
      </div>

      <div className="reciept-container">
        {props.items.map((item, index) => (
          <div key={index} className="official-reciept-plan">
            <div className="reciept-plan-name-container">
              <h2 className="reciept-plan-name">
                {item.plan} ({props.yearly ? "Yearly" : "Monthly"})
              </h2>
              <a
                onClick={props.returnLink}
                href="#"
                id="SecondComponent"
              >
                Change
              </a>
            </div>
            <p className="reciept-plan-price">
              ${props.yearly ? item.priceYearly : item.priceMonthly}/
              {props.yearly ? "yr" : "mo"}
            </p>
          </div>
        ))}
        <hr />

        {props.addOnsList.map((item, index) => (
          <div key={index} className="reciept-adds-container">
            <p className="reciept-adds-name">{item.name}</p>

            <p className="reciept-adds-price">
              +${props.yearly ? item.priceYearly : item.priceMonthly}/
              {props.yearly ? "yr" : "mo"}{" "}
            </p>
          </div>
        ))}
      </div>
      <div className="reciept-total">
        <p className="total-text">
          Total(per {props.yearly ? "year" : "month"})
        </p>
        <p className="total">
          +$
          {props.yearly
            ? props.items[0].priceYearly +
              props.addOnsList.reduce(
                (total, item) => total + item.priceYearly,
                0
              )
            : props.items[0].priceMonthly +
              props.addOnsList.reduce(
                (total, item) => total + item.priceMonthly,
                0
              )}
          /{props.yearly ? "yr" : "mo"}
        </p>
      </div>
    </section>
  );
};

export default FourthComponent;
