import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../redux/redux-store";

type ProfilePropsType = {
    profile:ProfilePageType
};

const Profile/*: React.FC<PropsType>*/ = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;