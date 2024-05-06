import React from 'react';

const ViewOrder = ({ order, onDelete }) => {
  return (
    <div>
      <h2>Order ID: {order._id}</h2>
      <p>Visitor ID: {order.visitor_id}</p>
      <p>Tickets: {order.tickets}</p>
      <p>Total Amount: {order.total_amount}</p>
      <button onClick={() => onDelete(order._id)}>Delete</button>
    </div>
  );
};

export default ViewOrder;
