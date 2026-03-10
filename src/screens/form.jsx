import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './form.css';
import { useState } from "react";

function Form() {

const [formData, setFormData] = useState({
fullName: "",
dob: "",
aadhaar: "",
phone: "",
email: "",
address: "",
city: ""
});

const handleAutocomplete = () => {
setFormData({
fullName: "Gay Man",
dob: "2005-06-14",
aadhaar: "wefejwrfn nenf ",
phone: "9876543210",
email: "arya.com",
address: "Bandra West",
city: "Mumbai"
});
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

return (
<>
Application Form

  <button className="btn" onClick={handleAutocomplete}>
    Autocomplete
  </button>

  <div className="form-container">
    <form className="form-box">

      <label>Full Name</label>
      <input
        name="fullName"
        type="text"
        placeholder="Enter full name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <label>Date of Birth</label>
      <input
        name="dob"
        type="date"
        value={formData.dob}
        onChange={handleChange}
      />

      <label>Aadhaar Number</label>
      <input
        name="aadhaar"
        type="text"
        placeholder="XXXX XXXX XXXX"
        value={formData.aadhaar}
        onChange={handleChange}
      />

      <label>Phone Number</label>
      <input
        name="phone"
        type="text"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Address</label>
      <input
        name="address"
        type="text"
        placeholder="Enter address"
        value={formData.address}
        onChange={handleChange}
      />

      <label>City</label>
      <input
        name="city"
        type="text"
        placeholder="Enter city"
        value={formData.city}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>

    </form>
  </div>
</>

);
}

export default Form