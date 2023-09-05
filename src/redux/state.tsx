

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
    sitebar: SitebarType;
}

export type storeType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addMessagesActionCreator>
    |ReturnType<typeof addPostActionCreator>
    |ReturnType<typeof updateNewPostTextActionCreator>
    |ReturnType<typeof updateNewMessagesTextActionCreator>




/*
export type AddMessagesActionType = ReturnType<typeof addMessagesActionCreator>

export type AddPostActionType= ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextType =  ReturnType<typeof updateNewPostTextActionCreator>

export type UpdateNewMessagesTextType = ReturnType<typeof updateNewMessagesTextActionCreator>*/

/*

export type ActionType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessagesActionCreator>
    | ReturnType<typeof updateNewMessagesTextActionCreator>;
*/


let store: storeType = {
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
        sitebar: {
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
        if (action.type === "ADD-POST") {
            let newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-MESSAGES") {
            let newMassages: MessageType = {
                id: 4,
                messages: this._state.dialogsPage.newMessagesText
            }
            this._state.dialogsPage.messages.push(newMassages)
            this._state.dialogsPage.newMessagesText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGES-TEXT") {
            this._state.dialogsPage.newMessagesText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}as const);

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: "UPDATE-NEW-POST-TEXT", newText: text}as const);


export const addMessagesActionCreator = () => ({type: 'ADD-MESSAGES'}as const);

export const updateNewMessagesTextActionCreator = (text: string)=>
    ({type: "UPDATE-NEW-MESSAGES-TEXT", newText: text}as const);

export default store

//window.store = store