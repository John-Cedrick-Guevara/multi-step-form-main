import { useState } from "react";
import "./App.css";
import FirstComponent from "../Components/firstComponent";
import SecondComponent from "../Components/secondComponent";
import FourthComponent from "../Components/FourthComponent";
import ThirdComponent from "../Components/ThirdComponent";
import FinalComponent from "../Components/FinalComponent";


function App() {
  // variables, States
  const [currentStep, setCurrentStep] = useState(0);

  // for step 1 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  // for step 2
  const [items, setItems] = useState([]);
  const [plan, setPlan] = useState("");
  const [yearly, setYearly] = useState(false);

  // for step 3
  const [addOnsList, setAddOnsList] = useState([]);
  const [addOnsClass, setAddOnsClass] = useState([]);

  // array of components
  const components = [
    <FirstComponent
      setName={setName}
      setNumber={setNumber}
      setEmail={setEmail}
      number={number}
      email={email}
      name={name}
      nameError={nameError}
      numberError={numberError}
      emailError={emailError}
    />,
    <SecondComponent
      items={items}
      addItems={addItems}
      next={next}
      prev={prev}
      yearly={yearly}
      setYearly={setYearly}
      plan={plan}
      selectPlan={selectPlan}
    />,
    <ThirdComponent
      selectAddOns={selectAddOns}
      addOnsClass={addOnsClass}
      yearly={yearly}
      setAdds={setAdds}
      addOnsList={addOnsList}
    />,
    <FourthComponent
      returnLink={returnLink}
      yearly={yearly}
      addOnsList={addOnsList}
      items={items}
    />,
    <FinalComponent />,
  ];

  // functions

  // for step 1 and also for buttons
  // functions for next button and prev button
  function next() {
    if (name === "" || email === "" || number === "") {
      if (name === "") {
        setNameError(true);
      } else {
        setNameError(false);
      }
      if (email === "") {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (!number.match(/^09[0-9]+$/) || number.length !== 11) {
        setNumberError(true);
      } else {
        setNumberError(false);
      }
    } else if (
      name !== "" &&
      email !== "" &&
      number.match(/^09[0-9]+$/) &&
      number.length === 11
    ) {
      if (currentStep < components.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  }

  function prev() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }
  // functions for next button and prev button

  // for step 2
  // function to add plan in an array
  function addItems(selected) {
    setItems([
      {
        plan: selected.plan,
        priceYearly: selected.priceYearly,
        priceMonthly: selected.priceMonthly,
      },
    ]);
  }

  // function to add Add-Ons on an array
  function setAdds(selected) {
    if (addOnsList.some((item) => item.name === selected.name)) {
      const filtered = addOnsList.filter((item) => item.name !== selected.name);
      setAddOnsList(filtered);
    } else {
      setAddOnsList([
        ...addOnsList,
        {
          name: selected.name,
          priceMonthly: selected.priceMonthly,
          priceYearly: selected.priceYearly,
        },
      ]);
    }
  }

  // for step 3
  // this function is for className of plans
  function selectPlan(e) {
    setPlan(e.target.value);
  }

  // this function is also used for classname of add-Ons
  function selectAddOns(e) {
    if (addOnsClass.includes(e.target.value)) {
      const filteredAdds = addOnsClass.filter(
        (item) => item !== e.target.value
      );
      setAddOnsClass(filteredAdds);
    } else {
      setAddOnsClass([...addOnsClass, e.target.value]);
    }
  }

  function returnLink() {
    setCurrentStep(1)
  }


  return (
    <>

      <main>
        <header>
          <div className="step-container">
            <h1 className={currentStep === 0 ? "active-step" : ""}>1</h1>

            <div className="step-texts">
              <h3 className="step-number">Step 1</h3>
              <h3 className="step-description">Your info</h3>
            </div>
          </div>
          <div className="step-container">
            <h1 className={currentStep === 1 ? "active-step" : ""}>2</h1>

            <div className="step-texts">
              <h3 className="step-number">Step 2</h3>
              <h3 className="step-description">Your plan</h3>
            </div>
          </div>
          <div className="step-container">
            <h1 className={currentStep === 2 ? "active-step" : ""}>3</h1>

            <div className="step-texts">
              <h3 className="step-number">Step 3</h3>
              <h3 className="step-description">add-ons</h3>
            </div>
          </div>
          <div className="step-container">
            <h1 className={currentStep >= 3 ? "active-step" : ""}>4</h1>

            <div className="step-texts">
              <h3 className="step-number">Step 4</h3>
              <h3 className="step-description">summary</h3>
            </div>
          </div>
        </header>
        {components[currentStep]}

        {currentStep < 4 && (
          <div className="buttons-container">
            {currentStep === 0 ? null : (
              <button className="prev" onClick={prev}>
                Go Back
              </button>
            )}
            <button className="next" onClick={next}>
              Next Step
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
