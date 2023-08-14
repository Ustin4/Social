import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Profile from "./Profile";
import {StateType} from "../../redux/redux-store";
import {getProfileThunkCreator, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string;
};

type ProfileContainerProps = {
    getProfileThunkCreator: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus:(status:string)=>void
    status:string
    profile: any;
};

function ProfileContainer(props: ProfileContainerProps) {
    const params = useParams<PathParamsType>();

    useEffect(() => {
        const userId = params.userId || "2";
        props.getProfileThunkCreator(userId)

        props.getStatus(userId)

    }, []);

    return (
        <Profile profile={props.profile}
                 status={props.status}
                 updateStatus={props.updateStatus}
        />
    )
}

// let AuthRedirectComponent =withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator,getStatus,updateStatus}),
    withAuthRedirect
)(ProfileContainer)
;