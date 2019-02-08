import React from 'react';
import MenuForm from './menuForm';

const MenuTable = (props) => {
  const { menuItems } = props;
  let menuList = [];
  if (menuItems !== undefined) {
    menuList = menuItems[0];
  }

  console.log(props);
  const {onSave, updateMenuState,  menuItem} = props;
  return (
    <div className="container">
      <div className="row" id="menu-heading">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <h2 className="text-center">Menu</h2>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
            Add Menu Item
          </button>
        </div>
      </div>
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
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Menu Item</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <MenuForm onSave={onSave} updateMenuState={updateMenuState} menuItem={menuItem} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTable;
