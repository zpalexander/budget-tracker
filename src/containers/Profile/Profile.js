import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { updateProfile } from '../../actions/user';
import Card from 'material-ui/Card';
import ProfileForm from '../../components/ProfileForm';
import './Profile.css';

class Profile extends Component {
  render() {
    const { profileActions } = this.props;

    const handleSubmitProfileUpdate = values => {
      console.log('values: ', values);
      profileActions.updateProfile(values);
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
  profileActions: bindActionCreators({ updateProfile }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
