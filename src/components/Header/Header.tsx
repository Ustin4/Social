import React from "react";
import s from './Header.module.css';
import {NavLink, Route} from "react-router-dom";

const Header = (props:any) => {

    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
            <div className={s.loginBlock}>

              {props.isAuth ? props.login:<NavLink to={'/login'}>Login</NavLink> }


            </div>
        </header>
    )
}
export default Header;
