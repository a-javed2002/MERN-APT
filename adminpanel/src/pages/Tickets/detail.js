import React from 'react';

const ViewTicket = ({ ticket, onDelete }) => {
  return (
    <div>
      <h2>{ticket.age_group}</h2>
      <p>Price: {ticket.price}</p>
      <button onClick={() => onDelete(ticket._id)}>Delete</button>
    </div>
  );
};

export default ViewTicket;
