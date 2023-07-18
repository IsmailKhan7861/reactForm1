import { useState } from "react";

const SimpleInput = (props) => {
  const [currName, setName] = useState("");
  const [isValidName, setisValidName] = useState(false);
  const [isEdit, setEdit] = useState(false);

  //form submit handler
  const formSubmit = (event) => {
    setEdit(true);
    event.preventDefault();
    if (currName.trim() === "") {
      setisValidName(false);
      return;
    }
    console.log(currName);
    setisValidName(true);
    setEdit(false);
    setName("");
  };
  //nameBlurHandler
  const nameBlurHandler = (event) => {
    setEdit(true);
    if (currName.trim() === "") {
      setisValidName(false);
      return;
    }
  };
  //Name handler
  const nameHandler = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setisValidName(true);
    }
  };

  const isValid1 = !isValidName && isEdit;
  return (
    <form onSubmit={formSubmit}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={currName}
          onBlur={nameBlurHandler}
        />
      </div>
      {isValid1 && <p className="error-text">Please Enter Name</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
