import {ActionTypes, PostType, ProfilePageType} from "./redux-store";


let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 12},
        {id: 2, message: 'hi how', likesCount: 11},
    ],
    newPostText: 'hi',
    profile: null
}

const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case "SET_USER_PROFILE": {
            return {
                ...state ,profile:action.profile
            }
        }

        default:
            return state
    }

}


export type ActionPostTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const);
export const setUserProfile = (profile: ProfilePageType) =>
    ({type: "SET_USER_PROFILE", profile} as const);

export default profileReducer