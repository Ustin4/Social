import React from "react";
import {NavLink} from "react-router-dom";
import style from './DialogsItem.module.css'
import userPhoto from "../../../assets/images/Sample_User_Icon.png";
import {Avatar} from "@mui/material";
import s from "../../Navbar/Navbar.module.scss";

type PropsType = {
    id: number;
    name: string;
    darkMode:boolean
};
const DialogItem: React.FC<PropsType> = ({ id, name,darkMode }) => {
    let path = "dialogs/" + id;

    return (
        <div className={style.dialogContainer}>
            <Avatar
                className={style.userPhoto}
                alt="photo"
                src={userPhoto}
                sizes={'large'}
                sx={{ width: 26, height: 36 }}
            />
            <div className={`${style.dialog} ${darkMode ? style.darkMode : ''}`}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;
