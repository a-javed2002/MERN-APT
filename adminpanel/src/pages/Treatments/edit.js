import React, { useState } from 'react';
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const EditTreatmentForm = ({ treatment, onSubmit }) => {
  const [description, setDescription] = useState(treatment.description);
  const [animalId, setAnimalId] = useState(treatment.animal_id);
  const [vetId, setVetId] = useState(treatment.vet_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...treatment, description, animalId, vetId });
  };

  return (
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
      <button type="submit">Update Treatment</button>
    </form>
  );
};

export default EditTreatmentForm;
