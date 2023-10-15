import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogsitem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/redux-store";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {Avatar} from "@mui/material";
import userPhoto from "../../assets/images/Sample_User_Icon.png";

type PropsType = {
    dialogsPage: DialogsPageType
    onSendMessageClick: (newMessagesText: string) => void
    darkMode: boolean
};

const Dialogs: React.FC<PropsType> = ({
                                          dialogsPage,
                                          onSendMessageClick,
                                          darkMode
                                      }) => {
    let state = dialogsPage

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem darkMode={darkMode} key={d.id} name={d.name} id={d.id}/>
    ));

    let messagesElements = state.messages.map((m) => (
        <Message darkMode={darkMode} key={m.id} message={m.messages}/>
    ));
    const formik = useFormik({
        initialValues: {
            send: '',
        },
        onSubmit: (values) => {
            onSendMessageClick(values.send)
            formik.resetForm()
            console.log(values)
        }
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div className={s.dialogs}> {dialogsElements}</div>
                <div className={s.message}>{messagesElements}</div>
            </div>

            <form onSubmit={formik.handleSubmit} className={s.messagesTextBox}>
                <div>
                    <TextField
                        fullWidth
                        label="Введите ваше сообщение"
                        id="fullWidth"
                        size={'small'}
                        {...formik.getFieldProps('send')}
                    />
                </div>
                <div>
                    <Button
                        type={"submit"}
                        variant="contained"
                        endIcon={<SendIcon/>}
                        className={s.buttonMessages}
                    >
                        add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Dialogs;