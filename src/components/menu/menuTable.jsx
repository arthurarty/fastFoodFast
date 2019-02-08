import React from 'react';

const MenuTable = (props) => {
  const { menuItems } = props;
  let menuList = [];
  if (menuItems !== undefined) {
    menuList = menuItems[0];
  }
  console.log(menuList);

  return (
    <div className="container">
      <h2 className="text-center">Menu</h2>
      <div className="table-responsive">
        <table className="table" id="menu">
          <thead>
            <tr>
              <th>
                Menu Id
              </th>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {menuList && Object.values(menuList).map((item, index) => (
              <tr key={index}>
                <td>{item[0].menu_id}</td>
                <td>{item[0].description}</td>
                <td>{item[0].name}</td>
                <td>{item[0].price}</td>
              </tr>
            ))}
          </tbody>
      </table>
      </div>
    </div>
  );
};

export default MenuTable;
