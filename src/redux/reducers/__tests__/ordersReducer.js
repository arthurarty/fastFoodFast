import reducer from '../ordersReducer';
import * as types from '../../actions/actionTypes';

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('return orders', () => {
    expect(
      reducer([], {
        type: types.LOAD_ORDERS_SUCCESS,
        orders: [
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
        ],
      }),
    ).toEqual([
      {
        0: [
          {
            created_at: '2019-02-08',
            menu_id: 1,
            order_id: 1,
            quantity: 15,
            status: 'New',
            user_id: 28,
          },
        ],
      },
    ]);
  });
});
