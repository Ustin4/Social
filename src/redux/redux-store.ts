import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import dialogsReducer, {ActionMessagesTypes} from "./dialogs-reducer";
import profileReducer, {ActionPostTypes} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {ActionUsersTypes} from "./users-reducer";
import authReducer, {ActionAuthTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer, {ActionAppTypes} from "./app-reducer";


export type PostType = {
    id: string;
    message: string;
    likesCount: number;
    name:string
    date:string
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
    contacts: any;
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
    Friend: Array<FriendType>;
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

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export default store