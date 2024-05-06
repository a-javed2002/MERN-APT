import React from 'react';
import ViewTreatment from './ViewTreatment';
import MyAsideBar from "../../components/aside";
import MyFooter from "../../components/footer";
import MyHeader from "../../components/header";

const TreatmentList = ({ treatments, onDelete }) => {
  return (
    <div>
      <h2>Treatments</h2>
      {treatments.map((treatment) => (
        <ViewTreatment key={treatment._id} treatment={treatment} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TreatmentList;
