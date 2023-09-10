import React from "react";

const ThirdComponent = (props) => {
  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
    },
    {
      name: "Larger storage",
      description: "extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
    },
  ];



  return (
    <section className="third-component">
      <div className="headings">
        <h1 className="heading-info">Pick add-ons</h1>
        <p className="paragraph-info">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="add-ons-container">
        {addOns.map((item, index) => (
          <label
            key={index}
            htmlFor={item.name}
            onChange={() => props.setAdds(item)}
            className={
              props.addOnsClass.includes(item.name)
                ? "add-on-card-active"
                : "add-on-card"
            }
          >
            <input
              type="checkbox"
              value={item.name}
              id={item.name}
              onChange={props.selectAddOns}
              checked={props.addOnsClass.includes(item.name)}
            />
            <div className="labels">
              <h1 className="add-name">{item.name}</h1>
              <p className="add-description">{item.description}</p>
            </div>
            <p className="add-ons-price">
              {" "}
              +${props.yearly ? item.priceYearly : item.priceMonthly}/{" "}
              {props.yearly ? "yr" : "mo"}{" "}
            </p>
          </label>
        ))}
      </div>
    </section>
  );
};

export default ThirdComponent;
