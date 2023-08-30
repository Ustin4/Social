import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type UserLocationType = {
    city: string;
    country: string;
}

export type UserType = {
    id: number;
    name: string;
    status: string;
    followed: boolean;
    photos: {
        small: string | null;
        large: string | null;
    };
    location: UserLocationType;

}

export type InitialStateType = {
    users: UserType[];
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "SET_USERS": {
            return {...state, users: action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state
    }

}


export type ActionUsersTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => ({type: 'FOLLOW', userId} as const);

export const unFollowSuccess = (userId: number) => ({type: "UNFOLLOW", userId} as const);

export const setUsers = (users: any) => ({type: "SET_USERS", users} as const);

export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const);

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const);

export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) =>
    ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', followingInProgress, userId} as const)


export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))

        userAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPage(page))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))

        userAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer