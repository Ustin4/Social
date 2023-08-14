import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessagesTextActionCreator(text));
        },
        onSendMessageClick: () => {
            dispatch(addMessagesActionCreator());
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)
;