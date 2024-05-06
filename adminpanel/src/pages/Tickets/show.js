import React from 'react';
import ViewTicket from './ViewTicket';

const TicketList = ({ tickets, onDelete }) => {
  return (
    <div>
      <h2>Tickets</h2>
      {tickets.map((ticket) => (
        <ViewTicket key={ticket._id} ticket={ticket} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TicketList;
