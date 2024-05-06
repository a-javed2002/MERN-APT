import React, { useState } from 'react';

const EditOrderForm = ({ order, onSubmit }) => {
  const [visitorId, setVisitorId] = useState(order.visitor_id);
  const [tickets, setTickets] = useState(order.tickets);
  const [totalAmount, setTotalAmount] = useState(order.total_amount);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...order, visitor_id: visitorId, tickets: tickets, total_amount: totalAmount });
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
      <button type="submit">Update Order</button>
    </form>
  );
};

export default EditOrderForm;
