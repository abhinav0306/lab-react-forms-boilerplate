import React from "react";
import "./Forms.css"
const Forms = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const alertState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const focusState = {
    firstName: false,
    lastName: false,
    email: false,
    contact: false,
  };

  const [formdata, setFormdata] = React.useState(initState);
  const [alert, setAlert] = React.useState(alertState);
  const [focus, setFocus] = React.useState(focusState);
  const [success, setSuccess] = React.useState(false);

  function handleChange(el) {
    const { name, value } = el.target;
    console.log(name, value);
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }
  function handleFocus(name) {
    let obj={
        firstName: false,
    lastName: false,
    email: false,
    contact: false,
    }
    obj[name]=true
    setFocus(obj)
  }

  function handleSubmit(el) {
    el.preventDefault();

    let msgBox = {};

    if (formdata.firstName === "") {
      msgBox.firstName = "First name is required";
    } else {
      msgBox.firstName = "";
    }

    if (formdata.lastName === "") {
        msgBox.lastName = "Last name is required";
      } else {
        msgBox.lastName = "";
      }

      if (formdata.email === "") {
        msgBox.email = "Please verify your email";
      } else {
        msgBox.email = "";
      }

      if (formdata.contact === "") {
        msgBox.contact = "Please enter phone number";
      } else if (!/^\d{10}$/.test(formdata.contact)) {
        msgBox.contact = "Invalid phone number.";
      } else {
        msgBox.contact = "";
      }

      setAlert(msgBox);
      if(msgBox.firstName=='' && msgBox.lastName=="" && msgBox.email==''&& msgBox.contact==''){
        setSuccess(true)
        setFormdata(initState);
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="firstName"
            value={formdata.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            placeholder="Enter your first name"
            style={{ borderColor: focus.firstName ? "orange" : "#ccc" }}
          />
          <div>{alert.firstName}</div>
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="lastName"
            value={formdata.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            placeholder="Enter your last name"
            style={{ borderColor: focus.lastName ? "orange" : "#ccc" }}
          />
          <div>{alert.lastName}</div>
        </label>
        <label htmlFor="">
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            placeholder="Enter your email"
            style={{ borderColor: focus.email ? "orange" : "#ccc" }}
          />
          <div>{alert.email}</div>
        </label>
        <label htmlFor="">
          <input
            type="tel"
            name="contact"
            value={formdata.contact}
            onChange={handleChange}
            onFocus={() => handleFocus("contact")}
            placeholder="Enter your conatct number"
            style={{ borderColor: focus.contact ? "orange" : "#ccc" }}
          />
          <div>{alert.contact}</div>
        </label>
        <button className="btn">Submit</button>
      </form>
      <div>
        {success && (<div className="success">Your form has been successfully submitted.</div>)}
      </div>
    </div>
  );
};

export default Forms;