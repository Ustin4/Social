import React from "react";
import {StateType,} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";

/*type PropsType = {
    store: StoreType
};*/

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
        let action = updateNewPostTextActionCreator(text)
        dispatch(action);
    },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const SuperPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperPostContainer;