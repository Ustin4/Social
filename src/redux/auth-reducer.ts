import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {handleServerAppError} from "../utils/Error/handleServerAppError";
import {handleServerNetworkError} from "../utils/Error/handleServerNetworkError";
import {rejects} from "assert";


export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

const initialState = {
    isAuth: false,
    error: null as string | null,
    userId: '' as unknown | undefined,
    login:''
};

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case "login/SET-IS-LOGGED-IN": {
            return {
                ...state, isAuth: action.value
            }
        }
        case "SET_APP_ERROR": {
            return {
                ...state, error: action.error
            }
        }
        case "SET_APP_STATUS": {
            return {
                ...state, status: action.status
            }
        }
        case "SET_AUTH_ME": {
            return {
                ...state, userId: action.userId
            }
        }
        default:
            return state
    }

}


export type ActionAuthTypes =
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppStatus>
    | ReturnType<typeof setAuthMe>

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

// actions
export const setAppStatus = (status: RequestStatusType) => ({type: 'SET_APP_STATUS', status} as const)
export const setAppError = (error: string | null) => ({type: 'SET_APP_ERROR', error} as const)

export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


export const setAuthMe = (userId: number) => ({type: 'SET_AUTH_ME', userId} as const)
export const setUserData = (data: LoginParamsType) => ({type: 'SET_USER_DATA', data} as const);


// thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.authMe()
        .then(data => {
            if (data.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAuthMe(data.data.data.id))
            }
        });
}
export const logoutTC = () => (dispatch: Dispatch<ActionAuthTypes>) => {
    authAPI.authLogOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
            }
        })
}

export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionAuthTypes>) => {
    authAPI.authLogin(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true));
                dispatch(setAuthMe(res.data.data.userId))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch((e) => {
            handleServerNetworkError(e, dispatch);
        })
};
export default authReducer