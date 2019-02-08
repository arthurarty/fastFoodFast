import React from 'react';

const OrderTable = (props) => {
  const { orders } = props;
  console.log(orders);
  let orderList = [];
  if (orders !== undefined) {
    orderList = orders[0];
  }
  return (
    <div className="container">
      <h2 className="text-center">Orders</h2>
      <div className="table-responsive">
        <table className="table" id="menu">
          <thead>
            <tr>
              <th>
                Menu Id
              </th>
              <th>
                Order Id
              </th>
              <th>
                User Id
              </th>
              <th>
                Quantity
              </th>
              <th>
                Status
              </th>
              <th>
                Created_at
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList && Object.values(orderList).map((item, index) => (
              <tr key={index}>
                <td>{item[0].menu_id}</td>
                <td>{item[0].order_id}</td>
                <td>{item[0].user_id}</td>
                <td>{item[0].quantity}</td>
                <td>{item[0].status}</td>
                <td>{item[0].created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
