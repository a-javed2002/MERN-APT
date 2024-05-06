import React, { useState } from "react";
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const CreateAnimal = () => {
  // Define state variables to hold form data
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [diseases, setDiseases] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/animal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, diseases }),
      });
      if (response.ok) {
        // Redirect or do something on successful submission
      } else {
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      <MyHeader />
      <MyAsideBar />
      <section id="main-content">
  <section className="wrapper">
    <div className="row">
        <h1>Add New Animal</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br />
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          /><br />
          <label htmlFor="diseases">Diseases:</label>
          <input
            type="text"
            id="diseases"
            name="diseases"
            value={diseases}
            onChange={(e) => setDiseases(e.target.value)}
          /><br />
          <button type="submit">Add Animal</button>
        </form>
        <a href="/animals">Cancel</a>
      </div>
      </section>
      </section>
      <MyFooter />
    </>
  );
};

export default CreateAnimal;
