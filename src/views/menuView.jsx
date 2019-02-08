import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'msg-notify/dist/notify.css';
import { bindActionCreators } from 'redux';
import MenuTable from '../components/menu/menuTable';
import { getDataThunk } from '../redux/thunks';
import { loadMenu } from '../redux/actions/menuAction';

export class MenuView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menu: {},
    };
  }

  componentDidMount() {
    const { getMenu } = this.props;
    getMenu('menu', loadMenu);
  }

  render() {
    const { menu } = this.props.state;
    return (
      <MenuTable menuItems={menu} />
    );
  }
}

MenuView.propTypes = {
  getMenu: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    menu: state.menu[0],
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMenu: bindActionCreators(getDataThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView);
