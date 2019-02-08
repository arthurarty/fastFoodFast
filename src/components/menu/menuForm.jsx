import React from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const MenuForm = (props) => {
  const { updateMenuState, onSave, menuItem } = props;

  return (
    <div>
      <form id="menuForm">
        <TextInput
          name="food_name"
          label="Food Name"
          value={menuItem.food_name}
          onChange={updateMenuState}
        />
        <TextInput
          name="desc"
          label="Description"
          value={menuItem.desc}
          onChange={updateMenuState}
        />
        <NumberInput
          name="price"
          label="Price"
          value={menuItem.price}
          onChange={updateMenuState}
        />
        <input
          id="submit"
          type="submit"
          value="Create Menu Item"
          className="btn btn-primary btn-block"
          onClick={onSave}
        />
      </form>
    </div>
  );
};

export default MenuForm;
