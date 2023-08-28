import {Dispatch} from "redux";
import {getAuthUserData, setIsLoggedInAC} from "./auth-reducer";
import {authAPI} from "../api/api";


const initialState = {
    isInitialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionAppTypes) => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state, isInitialized: action.isInitialized
            }
        }
        default:
            return state
    }

}


export type ActionAppTypes = ReturnType<typeof setInitialized>

// actions
export const setInitialized = (isInitialized: boolean) => ({type: 'SET_INITIALIZED', isInitialized} as const)


// thunks
// export const initializeApp = () => (dispatch: Dispatch) => {
//     dispatch(getAuthUserData())
//     dispatch(setInitialized())
//
// }
export const initializeApp = () => (dispatch: Dispatch) => {
    authAPI.authMe().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC(true));
        } else {
        }

        dispatch(setInitialized(true));
    });
}

export default appReducer;