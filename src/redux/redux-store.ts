import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import dialogsReducer, {ActionMessagesTypes} from "./dialogs-reducer";
import profileReducer, {ActionPostTypes} from "./profile-reducer";
import sidebarReducer, {ActionSidebar} from "./sidebar-reducer";
import usersReducer, {ActionUsersTypes} from "./users-reducer";
import authReducer, {ActionAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer, {ActionAppTypes} from "./app-reducer";
import themReducer, {ActionThemTypes} from "./them-reducer";


export type PostType = {
    id: number;
    message: string | undefined;
    likesCount: number;
    name: string
    date: string
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

type Contacts = {
    facebook: string | undefined;
    website: string | undefined;
    vk: string | undefined;
    twitter: string | undefined;
    instagram: string | undefined;
    youtube: string | undefined;
    github: string | undefined;
    mainLink: string | undefined;
    [key: string]: string | undefined;
};

export type ProfilePageType = {
    contacts: Contacts;
    photos: {
        small: string | null;
        large: string | null;
    };
    posts: Array<PostType>;
    newPostText: string;
    profile: string
    status: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessagesText: string;
}

export type SitebarType = {
    friend: Array<FriendType>;
}

export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
    sidebar: SitebarType;
    usersPage: any
    auth: any

}

export type ActionTypes = ActionPostTypes
    | ActionMessagesTypes
    | ActionUsersTypes
    | ActionAuthTypes
    | ActionAppTypes
    | ActionSidebar
    | ActionThemTypes

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    darkMode: themReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export default store