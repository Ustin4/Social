import {authAPI} from "../api/api";
import {Dispatch} from "redux";

// export type DataType = {
//     userId: any
//     email: any
//     login: any
//     isAuth: boolean
//     //isFetching: boolean
// }

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

const initialState = {
    // userId: null,
    // email: null,
    // login: null,
    isAuth: false
    //isFetching: false
};

type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: ActionAuthTypes) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case "login/SET-IS-LOGGED-IN": {
            return {
                ...state, isAuth: action.value
            }
        }
        default:
            return state
    }

}


export type ActionAuthTypes =
    | ReturnType<typeof setUserData>
    | ReturnType<typeof setIsLoggedInAC>


// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const setUserData = (data: LoginParamsType) => ({type: 'SET_USER_DATA', data} as const);


// thunks
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
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
                dispatch(setIsLoggedInAC(true))
            } else {
                return ''
            }
        })
}
export default authReducer