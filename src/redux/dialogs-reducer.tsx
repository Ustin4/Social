import {ActionTypes, MessageType} from "./redux-store";


let initialState = {
    dialogs: [
        {id: 1, name: 'Ustin'},
        {id: 2, name: 'Veronika'},
        {id: 3, name: 'yla'},
        {id: 4, name: 'Maxim'},
    ],
    messages: [
        {id: 1, messages: 'hi'},
        {id: 2, messages: 'How is your it-kamasutra?'},
        {id: 3, messages: 'yo!?'},
    ],
    newMessagesText: 'KY-KY'
}
export const dialogsReducer = (state = initialState, action: ActionTypes) => {
    let stateCopy
    switch (action.type) {
        case "ADD-MESSAGES":
            let newMassages: MessageType = {
                id: 4,
                messages: state.newMessagesText
            }
             return  {
                ...state,
                newMessagesText: '',
                messages: [...state.messages, newMassages]
            }


        case "UPDATE-NEW-MESSAGES-TEXT":

            return {
                ...state,
                newMessagesText: action.newText
            }

        default:
            return state
    }

}

export type ActionMessagesTypes =
    ReturnType<typeof addMessagesActionCreator>
    | ReturnType<typeof updateNewMessagesTextActionCreator>


export const addMessagesActionCreator = () => ({type: 'ADD-MESSAGES'} as const);

export const updateNewMessagesTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-MESSAGES-TEXT", newText: text} as const);


export default dialogsReducer