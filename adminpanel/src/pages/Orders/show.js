import React from 'react';
import ViewOrder from './ViewOrder';

const OrderList = ({ orders, onDelete }) => {
  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <ViewOrder key={order._id} order={order} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default OrderList;
