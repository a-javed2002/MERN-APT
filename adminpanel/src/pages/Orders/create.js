import React, { useState } from 'react';

const CreateOrderForm = ({ onSubmit }) => {
  const [visitorId, setVisitorId] = useState('');
  const [tickets, setTickets] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ visitor_id: visitorId, tickets: tickets, total_amount: totalAmount });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Visitor ID"
        value={visitorId}
        onChange={(e) => setVisitorId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tickets"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />
      <input
        type="number"
        placeholder="Total Amount"
        value={totalAmount}
        onChange={(e) => setTotalAmount(e.target.value)}
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default CreateOrderForm;
