import {ActionTypes, MessageType} from "./redux-store";


let initialState = {
    dialogs: [
        {id: 1, name: 'Rules'},
        {id: 2, name: 'Kavabanga'},
        {id: 3, name: 'DDDD'},
        {id: 4, name: 'Misha'},
    ],
    messages: [
        {id: 1, messages: 'hi'},
        {id: 2, messages: 'How is your it-kamasutra?'},
        {id: 3, messages: 'yo!?'},
    ],

}
export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-MESSAGES":
            let newMassages = action.newMessagesText
            return {
                ...state,
                messages: [...state.messages, {id:4,messages: newMassages}]
            }
        default:
            return state
    }

}
export type ActionMessagesTypes =
    ReturnType<typeof addMessagesActionCreator>
export const addMessagesActionCreator = (newMessagesText: string) => ({type: 'ADD-MESSAGES', newMessagesText} as const);
export default dialogsReducer