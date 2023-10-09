import React, {useEffect} from "react";
import {connect, useSelector} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Profile from "./Profile";
import {AppRootStateType, StateType} from "../../redux/redux-store";
import {getProfileThunkCreator, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
};



type ProfileContainerProps = {
    getProfileThunkCreator: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: string) => void
    status: string
    profile: any;
    isAuth: boolean

};

function ProfileContainer(props: ProfileContainerProps) {
    const params = useParams<PathParamsType>();

    const authorizedUserId = useSelector((state: AppRootStateType) => state.auth.userId)

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            // @ts-ignore доделать обязательно !!!!!!!!!!
            userId = authorizedUserId
        }
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
    status: state.profilePage.status,
    // authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator, getStatus, updateStatus}),
    withAuthRedirect
)(ProfileContainer)
;