import {ActionTypes} from "./redux-store";

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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        default:
            return state
    }

}


export type ActionFollowTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const);

export const unFollow = (userId: number) => ({type: "UNFOLLOW", userId} as const);

export const setUsers = (users: any) => ({type: "SET_USERS", users} as const);

export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const);
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const);

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const);

export default usersReducer