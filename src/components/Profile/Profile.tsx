import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/redux-store";
import s from './Profile.module.css'

type ProfilePropsType = {
    profile: ProfilePageType
    updateStatus: (status: string) => void
    status: string
    darkMode: boolean
};

const Profile: React.FC<ProfilePropsType> = ({
                                                 profile,
                                                 updateStatus,
                                                 status,
                                                 darkMode
                                             }) => {


    return (
        <div className={s.wall}>
            <ProfileInfo darkMode={darkMode}
                         profile={profile}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;