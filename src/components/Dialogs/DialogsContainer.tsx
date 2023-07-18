import React from "react";
import {StateType} from "../../redux/store";
import {addMessagesActionCreator, updateNewMessagesTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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