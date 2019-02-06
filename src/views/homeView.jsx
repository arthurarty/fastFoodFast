import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import { bindActionCreators } from 'redux';
import { postDataThunk } from '../redux/thunks';
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';
import { signUp, loginUser } from '../redux/actions/authActions';

export class HomeView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user),
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidUpdate(prevProps) {
    let { message, loginMessage } = this.props.state;
    if ((message !== prevProps.state.message) && (message.length > 0)) {
      notify(message[0].msg, 'info');
      message = [];
    }
    if (loginMessage !== prevProps.state.loginMessage) {
      if (typeof loginMessage[0].msg !== 'undefined') {
        notify(loginMessage[0].msg);
      }
      notify(loginMessage[0][0].msg, 'info');
      localStorage.setItem('access_token', loginMessage[0][1].access_token);
      loginMessage = [];
    }
  }

  updateUserState(event) {
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  saveUser(event) {
    const { user } = this.state;
    const { createUser } = this.props;
    event.preventDefault();
    createUser(user, 'signup', signUp);
  }

  login(event) {
    const { user } = this.state;
    const { createUser } = this.props;
    event.preventDefault();
    createUser(user, 'login', loginUser);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 signup">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">SignUP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <SignUpForm
              onChange={this.updateUserState}
              onSave={this.saveUser}
              user={user}
            />
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <LoginForm
              onChange={this.updateUserState}
              onSave={this.login}
              user={user}
            />
          </div>
        </div>
      </div>
    );
  }
}

HomeView.propTypes = {
  createUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: bindActionCreators(postDataThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
