import React, { useState } from 'react';

const CreateTicketForm = ({ onSubmit }) => {
  const [ageGroup, setAgeGroup] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ age_group: ageGroup, price: price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Age Group"
        value={ageGroup}
        onChange={(e) => setAgeGroup(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Create Ticket</button>
    </form>
  );
};

export default CreateTicketForm;
