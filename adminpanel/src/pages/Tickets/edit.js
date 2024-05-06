import React, { useState } from 'react';

const EditTicketForm = ({ ticket, onSubmit }) => {
  const [ageGroup, setAgeGroup] = useState(ticket.age_group);
  const [price, setPrice] = useState(ticket.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...ticket, age_group: ageGroup, price: price });
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
      <button type="submit">Update Ticket</button>
    </form>
  );
};

export default EditTicketForm;
