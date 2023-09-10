import React, { useState } from "react";

const FirstComponent = (props) => {

  return (
    <section className="first-component">
      <div className="headings">
        <h1 className="heading-info">Personal Info</h1>
        <p className="paragraph-info">
          Please provide your name, email, address, and phone number.
        </p>
      </div>

      <section className="input-container">
        {/* name input field */}
        <div className="label-and-error">
          <label htmlFor="name">Name</label>
          {props.nameError && <p className="error">This field is required</p>}
        </div>
        <input
          className={props.nameError ? "error-input" : "input"}
          onChange={(e) => props.setName(e.target.value)}
          id="name"
          value={props.name}
          type="text"
          placeholder="e.g. Stephen King"
        />
        {/* name input field */}
        {/* email input field */}
        <div className="label-and-error">
          <label htmlFor="email">Email Address</label>
          {props.emailError && <p className="error">This field is required</p>}
        </div>
        <input
          className={props.emailError ? "error-input" : "input"}
          onChange={(e) => props.setEmail(e.target.value)}
          id="email"
          value={props.email}
          type="text"
          placeholder="e.g. stephenking@lorem.com"
        />
        {/* email input field */}
        {/* number input field */}
        <div className="label-and-error">
          <label htmlFor="number">Phone Number</label>
          {props.numberError && <p className="error">This field is required</p>}
        </div>
        <input
          className={props.numberError ? "error-input" : "input"}
          onChange={(e) => props.setNumber(e.target.value)}
          value={props.number}
          id="number"
          type="text"
          placeholder="e.g. 09123456789"
        />
        {/* number input field */}
      </section>
    </section>
  );
};

export default FirstComponent;
