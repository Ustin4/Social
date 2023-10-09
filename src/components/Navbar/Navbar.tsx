import React from "react";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import FriendNavContainer from "../Friends/FriendNavContainer";



const Navbar: React.FC<any> = ({sidebar}) => {
    return (
        <nav className={s.navbar}>
            <div className={s.navItem}>
                <NavLink
                    to="/profile"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Profile
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink
                    to="/dialogs"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Messages
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink
                    to="/Users"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Users
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink
                    to="/news"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    News
                </NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink
                    to="/friends"
                    className={(navData) =>
                        navData.isActive ? s.active : `${s.item}`
                    }>
                    Friends
                </NavLink>
            </div>
            <div className={s.navItem}>
                <a>Music</a>
            </div>
            <div className={s.navItem}>
                <a>Settings</a>
            </div>

            <FriendNavContainer/>
        </nav>
    );
};


export default Navbar;