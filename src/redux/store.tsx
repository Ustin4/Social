import profileReducer, {ActionPostTypes} from "./profile-reducer";
import dialogsReducer, {ActionMessagesTypes} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

export type DialogType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    messages: string;
}

export type FriendType = {
    id: number;
    name: string;
}

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string;
}

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessagesText: string;
}

export type SitebarType = {
    Friend: Array<FriendType>;
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SitebarType;
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ActionPostTypes | ActionMessagesTypes


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how are you?', likesCount: 12},
                {id: 2, message: 'hi how', likesCount: 11},
            ],
            newPostText: 'hi'
        },
        dialogsPage: {
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
        },
        sidebar: {
            Friend: [
                {id: 1, name: "ustin "},
                {id: 2, name: "veronika"},
                {id: 3, name: " igor"}
            ]
        }
    },
    _callSubscriber() {
        console.log('state  changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer( this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer( this._state.sidebar,action)

        this._callSubscriber(this._state)

    }
}

export default store

//window.store = store