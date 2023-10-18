import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {setDarkMode} from "../../redux/them-reducer";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Switch} from "@mui/material";
import style from './settings.module.scss'

const Settings = () => {
    const dispatch = useAppDispatch()
    const darkMode = useAppSelector(state => state.darkMode.darkMode)
    const darkClickHandler = () => {
        dispatch(setDarkMode(!darkMode))
    }

    return (

        <div className={style.switchContainer}>
            <FormControlLabel checked={darkMode} onClick={darkClickHandler} control={<Switch defaultChecked />} label="Dark mode"/>
        </div>
    );
};

export default Settings;