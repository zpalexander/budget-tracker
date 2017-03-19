import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Card from 'material-ui/Card';
import LoginForm from '../../components/LoginForm';
import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  render() {

    const handleSubmitLoginForm = values => {
      console.log('values: ', values);
    };

    return (
      <div className="login-content">
        <Card className="login-card">
          <div className="app-logo-container">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <LoginForm handleSubmit={ handleSubmitLoginForm } />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  actionsctions: bindActionCreators({
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
