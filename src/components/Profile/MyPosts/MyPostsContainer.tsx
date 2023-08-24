import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text:string|undefined) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

const SuperPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default SuperPostContainer;