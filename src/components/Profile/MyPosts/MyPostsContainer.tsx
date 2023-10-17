import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPostsForm} from "./MyPostsForm";

import {connect} from "react-redux";
import {AppRootStateType, StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

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

const SuperPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsForm)

export default SuperPostContainer;