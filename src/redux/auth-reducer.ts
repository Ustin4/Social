import {ActionTypes} from "./redux-store";

export type DataType = {
    userId: any
    email: any
    login: any
    isAuth:boolean
    //isFetching: boolean
}

const initialState: DataType = {
    userId: null,
    email: null,
    login: null,
    isAuth:false
    //isFetching: false
};


const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }

}


export type ActionAuthTypes =
    | ReturnType<typeof setUserData>


export const setUserData = (data:DataType) => ({type: 'SET_USER_DATA',data} as const);
export default authReducer