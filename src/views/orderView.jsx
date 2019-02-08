import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'msg-notify/dist/notify.css';
import './notification.css';
import { bindActionCreators } from 'redux';
import OrderTable from '../components/orders/orderTable';
import NavBar from '../components/common/NavBar';
import { getDataThunk } from '../redux/thunks';
import loadOrdersSuccess from '../redux/actions/orderActions';

export class OrderView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      orders: {},
    };
  }

  componentDidMount() {
    const { getOrders } = this.props;
    getOrders('orders', loadOrdersSuccess);
  }

  render() {
    const { orders } = this.props.state;
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-4">
            <OrderTable orders={orders} />
          </main>
        </div>
      </div>
    );
  }
}

OrderView.propTypes = {
  getOrders: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    orders: state.orders[0],
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrders: bindActionCreators(getDataThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);
