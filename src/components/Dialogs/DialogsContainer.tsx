import {addMessagesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType, StateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        darkMode: state.darkMode.darkMode
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: (newMessagesText: string) => {
            dispatch(addMessagesActionCreator(newMessagesText));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;