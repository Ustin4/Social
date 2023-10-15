import React from "react";
import style from './Message.module.css'


type PropsType = {
    message: string;
    darkMode:boolean
};

const Message: React.FC<PropsType> = ({message,darkMode}) => {

    return (
        <div>
            <div className={`${style.message} ${darkMode ? style.darkMode : ''}`}>{message}</div>
        </div>
    )
}
export default Message;
