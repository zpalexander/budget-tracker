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
    const { budgetCategories, userActions } = this.props;

    const handleSubmitProfileUpdate = values => userActions.updateProfile(values);

    return (
      <Card className="profile-card">
        <ProfileForm
          budgetCategories={ budgetCategories }
          onSubmit={ handleSubmitProfileUpdate }
        />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  budgetCategories: state.user.categories,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActionFunctions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
