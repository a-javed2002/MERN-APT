import React, { useState } from 'react';
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const CreateTreatmentForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [animalId, setAnimalId] = useState('');
  const [vetId, setVetId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, animalId, vetId });
  };

  return (
    <>

      <MyHeader />
      <MyAsideBar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Animal ID"
          value={animalId}
          onChange={(e) => setAnimalId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vet ID"
          value={vetId}
          onChange={(e) => setVetId(e.target.value)}
        />
        <button type="submit">Create Treatment</button>
      </form>
      <MyFooter></MyFooter>
    </>
  );
};

export default CreateTreatmentForm;
