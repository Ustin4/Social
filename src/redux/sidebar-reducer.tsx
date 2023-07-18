import {ActionTypes} from "./store";

let initialState = {
    Friend: [
        {id: 1, name: "ustin "},
        {id: 2, name: "veronika"},
        {id: 3, name: " igor"}
    ]
}

export const sidebarReducer = (state = initialState, action: ActionTypes) => {
    return state
}

export default sidebarReducer