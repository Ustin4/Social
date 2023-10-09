import {Dispatch} from "redux";
import {profileAPI} from "../api/api";


interface InitialState {
    friends: any[]; // Замените `any[]` на конкретный тип, если известно, какого типа должны быть элементы массива `friends`
    friendsFlag: boolean;
    pageSize: number
}

let initialState: InitialState = {
    friends: [],
    friendsFlag: true,
    pageSize: 30,


};
export const sidebarReducer = (state = initialState, action: ActionSidebar) => {
    switch (action.type) {
        case "SET-FRIENDS":
            return {
                ...state,
                friends: action.friends
            }
        case "SET-FRIENDS-FLAG":
            return {
                ...state,
                friendsFlag: action.friendsFlag
            }


        default:
            return state
    }


}

export const setFriends = (friends: any) => ({type: 'SET-FRIENDS', friends} as const)
export const setFriendsFlag = (friendsFlag: boolean) => ({type: 'SET-FRIENDS-FLAG', friendsFlag} as const)


export type ActionSidebar =
    ReturnType<typeof setFriends>
    | ReturnType<typeof setFriendsFlag>


export const getFriendTC = (friendsFlag: boolean, pageSize?: number) => (dispatch: Dispatch) => {

    return profileAPI.getFriends(friendsFlag, pageSize)
        .then(response => {
            dispatch(setFriends(response.items))
        })
        .finally(() => {
            dispatch(setFriendsFlag(true))
        })
}


export default sidebarReducer