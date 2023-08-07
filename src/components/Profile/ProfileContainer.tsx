import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Profile from "./Profile";
import { ProfilePageType, StateType } from "../../redux/redux-store";
import { setUserProfile } from "../../redux/profile-reducer";

type PathParamsType = {
    userId: string;
};

type ProfileContainerProps = {
    setUserProfile: (profile: ProfilePageType) => void;
    profile: any;
};

function ProfileContainer(props: ProfileContainerProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams<PathParamsType>();

    useEffect(() => {
        let userId = params.userId;
        if (!userId) {
            userId = "2";
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: AxiosResponse) => {
                props.setUserProfile(response.data);
            });
    }, []);

    return <Profile profile={props.profile} />;
}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);