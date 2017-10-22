// Libraries
import React, { Component } from 'react';
// State
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { login } from '../../actions/user';
// Components
import Card from 'material-ui/Card';
import LoginForm from '../../components/LoginForm';
import LoadingOverlay from '../../components/LoadingOverlay';
// Styles and assets
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
    const { isLoading } = this.props;

    return (
      <div className="login-content">
        <Card className="login-card">
          <div className="app-logo-container">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <LoginForm onSubmit={ this.handleSubmitLoginForm } />
        </Card>
        <LoadingOverlay show={ isLoading } />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators({ login }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
