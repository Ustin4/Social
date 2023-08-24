import {ActionTypes, PostType, ProfilePageType} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {AxiosResponse} from "axios";


let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 12},
        {id: 2, message: 'hi how', likesCount: 11},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = action.text
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: newPost,likesCount: 1}],
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SET_STATUS": {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }

}


export type ActionPostTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>


export const addPostActionCreator = (text: string|undefined) => ({type: 'ADD-POST', text} as const);


export const setUserProfile = (profile: ProfilePageType) =>
    ({type: "SET_USER_PROFILE", profile} as const);
export const setStatus = (status: string) =>
    ({type: "SET_STATUS", status} as const);

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response: AxiosResponse) => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response: AxiosResponse) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}
export const getProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId)
        .then((response: AxiosResponse) => {
            dispatch(setUserProfile(response.data))
        });

}
export default profileReducer