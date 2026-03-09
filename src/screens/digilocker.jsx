import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function DigiLocker({ documents }) {
  return (
   <>
    <p>Digilocker</p>
    <h2>Your documents</h2>
    <ul>
      {documents.map((doc, index) => (
        <>
        <img
            src={URL.createObjectURL(doc)}
            alt={doc.name}
            width="200"
          />
        <p key={index}>{doc.name}</p>
        </>

      ))}
    </ul>
   </>
  )
}

export default DigiLocker