import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {ProfilePageType, StateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

/*
type PropsType = {
    store:StoreType
};*/

type ProfileContainerPropsType = {
    setUserProfile:(profile:ProfilePageType)=>void
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)


            })
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}

let mapStateToProps = (state: StateType) => ({
    profile:state.profilePage.profile
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);