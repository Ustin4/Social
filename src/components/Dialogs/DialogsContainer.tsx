import {addMessagesActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: (newMessagesText:string) => {
            dispatch(addMessagesActionCreator(newMessagesText));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
;