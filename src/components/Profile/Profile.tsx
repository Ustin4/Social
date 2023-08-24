import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/redux-store";

type ProfilePropsType = {
    profile: ProfilePageType
    updateStatus: (status: string) => void
    status: string
};

const Profile: React.FC<ProfilePropsType> = ({
                                                 profile,
                                                 updateStatus,
                                                 status
                                             }) => {
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;