import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";


type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessage: (text:string) => void
    onSendMessageClick:()=>void

};

const Dialogs: React.FC<PropsType> = ({ dialogsPage
                                          , updateNewMessage
                                          ,onSendMessageClick}) => {

let state = dialogsPage

    let dialogsElements = state.dialogs.map((d) => (<DialogItem  key={d.id} name={d.name} id={d.id} />));
    let messagesElements = state.messages.map((m) => (<Message key={m.id} message={m.messages} />));
    let newMessagesText = state.newMessagesText;


    const messagePostsClickHandler = () => {
       onSendMessageClick()
    };


    const onChangeMessagePostsHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        updateNewMessage(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={s.messagesTextBox}>
                <div>
          <textarea
              placeholder="Enter your message"
              onChange={onChangeMessagePostsHandler}
              value={newMessagesText}
          />
                </div>
                <div>
                    <button className={s.buttonMessages} onClick={messagePostsClickHandler}>
                        add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;