import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Card from 'material-ui/Card';
import ProfileForm from '../../components/ProfileForm';
import './Profile.css';

class Profile extends Component {
  render() {

    const handleSubmitProfileUpdate = values => {
      console.log('values: ', values);
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
  actionsctions: bindActionCreators({
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
