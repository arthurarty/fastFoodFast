import loadOrderSucess from '../orderActions';
import * as types from '../actionTypes';

describe('menu actions', () => {
  it('Should return orders', () => {
    const orders = [
      [
        {
          created_at: '2019-02-08',
          menu_id: 1,
          order_id: 1,
          quantity: 15,
          status: 'New',
          user_id: 28,
        },
      ],
    ];
    const expectedAction = {
      type: types.LOAD_ORDERS_SUCCESS,
      orders,
    };
    expect(loadOrderSucess(orders)).toEqual(expectedAction);
  });
});
