import React from "react";
import s from './Navbar.module.css'

import {NavLink} from "react-router-dom";
import FriendContainer from "../Friends/FriendContainer";
import ButtonAppBar from "../../utils/AppBar";
/*
type PropsType = {
    sidebar:SitebarType
};*/

const Navbar: React.FC<any> = ({sidebar}) => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    to="/profile"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/dialogs"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/Users"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Users
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/news"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    News
                </NavLink>
            </div>
            <div className={`${s.item}`}>
                <a>Music</a>
            </div>
            <div className={`${s.item}`}>
                <a>Settings</a>
            </div>
            <FriendContainer/>
        </nav>
    );
};





export default Navbar;