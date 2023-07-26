import {ActionTypes, PostType} from "./redux-store";


let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 12},
        {id: 2, message: 'hi how', likesCount: 11},
    ],
    newPostText: 'hi'
}

const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts :[...state.posts,newPost],
                newPostText :''
            }
        case "UPDATE-NEW-POST-TEXT":
            return{
                ...state,
                newPostText : action.newText
            }
        default:
            return state
    }

}


export type ActionPostTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>


export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: text} as const);

export default profileReducer