import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile, getProfile } from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom';

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
      userId = 26614;
    }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapDispatchToProps = (state) => ({
  userProfile: state.profileInfo.userProfile
})

export default connect(mapDispatchToProps, { setUserProfile, getProfile })(withRouter(ProfileContainer));