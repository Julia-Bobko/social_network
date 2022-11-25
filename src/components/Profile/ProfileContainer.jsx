import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getProfile, SetProfileStatus, UpdateStatus  } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26541;
    }
    this.props.getProfile(userId);
    this.props.SetProfileStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} status={this.props.status} userProfile={this.props.userProfile} UpdateStatus={this.props.UpdateStatus} />
    )
  }
}

let mapDispatchToProps = (state) => ({
  userProfile: state.profileInfo.userProfile,
  status: state.profileInfo.status
})


export default compose(
  connect(mapDispatchToProps, { setUserProfile, getProfile, SetProfileStatus, UpdateStatus }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer)