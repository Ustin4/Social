import React from "react";

import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

/*

type PropsType = {
    store: StoreType
};
*/


let mapStateToProps = (state:StateType) => {

    return {
        dialogsPage: state.dialogsPage
    }
}



let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessage:(text: string)=>{
            dispatch(updateNewMessagesTextActionCreator(text));
            },
        onSendMessageClick:()=>{
            dispatch(addMessagesActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;