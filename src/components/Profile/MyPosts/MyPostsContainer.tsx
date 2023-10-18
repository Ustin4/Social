import {addPostActionCreator} from "../../../redux/profile-reducer";

import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        darkMode:state.darkMode.darkMode
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