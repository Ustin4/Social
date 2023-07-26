import {combineReducers, createStore, Store} from "redux";
import dialogsReducer, {ActionMessagesTypes} from "./dialogs-reducer";
import profileReducer, {ActionPostTypes} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionFollowTypes} from "./users-reducer";



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
    usersPage:any
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ActionPostTypes | ActionMessagesTypes | ActionFollowTypes


let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer
})
const store: Store<StoreType, ActionTypes> = createStore(reducers);

export default store