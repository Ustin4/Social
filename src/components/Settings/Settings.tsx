import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {setDarkMode} from "../../redux/them-reducer";

const Settings = () => {
    const dispatch = useAppDispatch()
const darkMode = useAppSelector(state => state.darkMode.darkMode)
    const darkClickHandler = ()=>{
        dispatch(setDarkMode(!darkMode))
    }

    return (

        <div>
            <button onClick={darkClickHandler}> dark </button>
        </div>
    );
};

export default Settings;