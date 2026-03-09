import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './form.css';

function Form() {
  return (
    <>
      <h2 className="App">Application Form</h2>
      <div className="form-container">

        

        <form className="form-box">

          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" />

          <label>Date of Birth</label>
          <input type="date" />

          <label>Aadhaar Number</label>
          <input type="text" placeholder="XXXX XXXX XXXX" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" />

          <label>Email</label>
          <input type="email" placeholder="Enter email" />

          <label>Address</label>
          <input type="text" placeholder="Enter address" />

          <label>City</label>
          <input type="text" placeholder="Enter city" />

          <button type="submit">Submit</button>

        </form>
      </div>
    </>
  )
}

export default Form