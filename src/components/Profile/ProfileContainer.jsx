import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from '../../redux/profile-reducer';
import axios from "axios";
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
      this.props.setUserProfile(response.data);
      // this.props.setTotalCount(response.data.totalCount);
    })
  }

  render() {
    return (
      <Profile {...this.props}/>
    )
  }
}



let mapDispatchToProps = (state) => ({
  userProfile: state.profileInfo.userProfile
})

export default connect(mapDispatchToProps, { setUserProfile })(withRouter(ProfileContainer));