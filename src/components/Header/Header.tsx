import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

const Header = (props: any) => {

    return (
        <header className={s.header}>

            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <LoginIcon onClick={props.logoutTC}>Log out</LoginIcon></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;
