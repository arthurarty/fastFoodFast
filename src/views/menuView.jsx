import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'msg-notify/dist/notify.css';
import './notification.css';
import { bindActionCreators } from 'redux';
import MenuTable from '../components/menu/menuTable';
import NavBar from '../components/common/NavBar';
import { getDataThunk, postDataThunk } from '../redux/thunks';
import { loadMenu, addMenu } from '../redux/actions/menuAction';

export class MenuView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      menu: {},
      menuItem: Object.assign({}, props.menuItem),
    };
    this.updateMenuState = this.updateMenuState.bind(this);
    this.saveMenuItem = this.saveMenuItem.bind(this);
  }

  componentDidMount() {
    const { getMenu } = this.props;
    getMenu('menu', loadMenu);
  }

  updateMenuState(event) {
    const field = event.target.name;
    const { menuItem } = this.state;
    menuItem[field] = event.target.value;
    return this.setState({ menuItem });
  }

  saveMenuItem(event) {
    const { menuItem } = this.state;
    const { postMenu } = this.props;
    event.preventDefault();
    postMenu(menuItem, 'menu', addMenu, true);
  }

  render() {
    const { menu } = this.props.state;
    const { menuItem } = this.state;

    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-4">
            <MenuTable
              menuItems={menu}
              onSave={this.saveMenuItem}
              updateMenuState={this.updateMenuState}
              menuItem={menuItem}
            />
          </main>
        </div>
      </div>
    );
  }
}

MenuView.propTypes = {
  getMenu: PropTypes.func.isRequired,
  postMenu: PropTypes.func.isRequired,
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
    postMenu: bindActionCreators(postDataThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuView);
