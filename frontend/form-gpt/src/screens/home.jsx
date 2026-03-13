import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function Home({documents, setDocuments}) {
  const handleUpload = (event) => {

    const files = Array.from(event.target.files);

    if (files.length === 0) return;
    if (documents.length + files.length > 5) {
      alert("Maximum 5 documents allowed");
      return;
  }

    setDocuments(prev => [...prev, ...files]);

    event.target.value = null;

  };
  const uploadDocument = async () => {

    const formData = new FormData();

    documents.forEach((doc) => {
      formData.append("files", doc);
    });

    const response = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    console.log(data);
  };

  
  return (
    <>
        <p>Home</p>
        <h2>Upload Documents</h2>
        <input type="file" multiple accept="image/*" onChange={handleUpload} />
        <p>Documents uploaded: {documents.length}</p>
        {documents.map((doc, index) => (
        <img
          key={index}
          src={URL.createObjectURL(doc)}
          width="150"
        />
      ))}
        <button onClick={uploadDocument}>
          Upload Document
        </button>
      
    </>
  )
}

export default Home