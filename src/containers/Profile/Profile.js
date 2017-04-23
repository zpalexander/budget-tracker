import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as userActionFunctions from '../../actions/user';
import Card from 'material-ui/Card';
import ProfileForm from '../../components/ProfileForm';
import './Profile.css';

class Profile extends Component {
  componentDidMount() {
    this.props.userActions.getProfile();
  }

  render() {
    const { userActions } = this.props;

    const handleSubmitProfileUpdate = values => {
      console.log('values: ', values);
      userActions.updateProfile(values);
    };

    return (
      <Card className="profile-card">
        <ProfileForm onSubmit={ handleSubmitProfileUpdate } />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFunctions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
