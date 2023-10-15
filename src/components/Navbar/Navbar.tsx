import React from "react";
import s from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import FriendNavContainer from "../Friends/FriendNavContainer";
import {ThemeContext} from "../../utils/Theme/Theme";
import {useAppSelector} from "../../redux/redux-store";

type Navbar = {
}

const Navbar: React.FC<Navbar> = ({}) => {

    const darkMode = useAppSelector(state => state.darkMode.darkMode)

    return (
        <nav className={`${s.navbar} ${darkMode ? s.darkMode : ''}`}>
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
                <NavLink to='/Settings'
                         className={(navData) =>
                             navData.isActive ? s.active : `${s.item}`
                         }>
                    Settings
                </NavLink>
            </div>

            <FriendNavContainer/>

        </nav>
    );
};


export default Navbar;