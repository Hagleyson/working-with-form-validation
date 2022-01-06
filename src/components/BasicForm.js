import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid, enteredLastNameIsValid]);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) return;
    if (!enteredEmailIsValid) return;
    if (!enteredLastNameIsValid) return;
    console.log(enteredName, enteredEmail, enteredLastName);
    resetNameInput();
    resetEmailInput();
    resetLastNameInput();
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group ">
        <div className={`form-control ${nameInputHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be Empty</p>
          )}
        </div>

        <div className={`form-control ${lastNameInputHasError && "invalid"}`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Name must not be Empty</p>
          )}
        </div>
      </div>

      <div className={`form-control ${emailInputHasError && "invalid"}`}>
        <label htmlFor="lastName">E-Mail Address</label>
        <input
          type="text"
          id="lastName"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={formIsValid ? false : true}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
