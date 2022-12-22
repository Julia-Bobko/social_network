import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getProfile, SetProfileStatus, UpdateStatus, savePhoto } from '../../redux/profile-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authoriZedUser;
    }
    this.props.getProfile(userId);
    this.props.SetProfileStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile {...this.props} status={this.props.status}  userProfile={this.props.userProfile} UpdateStatus={this.props.UpdateStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} />
    )
  }
}

let mapDispatchToProps = (state) => ({
  userProfile: state.profileInfo.userProfile,
  status: state.profileInfo.status,
  authoriZedUser: state.auth.id,
  isAuth: state.auth.isAuthorized
})


export default compose(
  connect(mapDispatchToProps, { setUserProfile, getProfile, SetProfileStatus, UpdateStatus, savePhoto }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer)