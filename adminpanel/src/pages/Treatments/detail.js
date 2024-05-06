import React from 'react';
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const ViewTreatment = ({ treatment, onDelete }) => {
  return (
    <div>
      <h2>{treatment.description}</h2>
      <p>Animal ID: {treatment.animal_id}</p>
      <p>Vet ID: {treatment.vet_id}</p>
      <button onClick={() => onDelete(treatment._id)}>Delete</button>
    </div>
  );
};

export default ViewTreatment;
