import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Card from 'material-ui/Card';
import LoginForm from '../../components/LoginForm';
import { login } from '../../actions/user';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitLoginForm = this.handleSubmitLoginForm.bind(this);
  }

  handleSubmitLoginForm(values) {
    const { username, password } = values;
    this.props.loginActions.login(username, password);
  }

  render() {
    console.log(this.props.loginActions);
    return (
      <div className="login-content">
        <Card className="login-card">
          <div className="app-logo-container">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <LoginForm onSubmit={ this.handleSubmitLoginForm } />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators({ login }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
