import React from "react";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import {useDispatch, useSelector} from "react-redux";
import {RequestStatusType} from "../../redux/auth-reducer";
import BoltIcon from '@mui/icons-material/Bolt';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppSelector} from "../../redux/redux-store";
const Header = (props: any) => {

const isAuth = useAppSelector((state) =>state.auth.isAuth )
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.title}>
                </div>
                <div>
                    {isAuth
                        ?
                        <div className={s.loginInfo}>
                            <span>{props.loading}</span>
                            <button className={s.logoutBtn} onClick={() => props.isAuth
                                                ? <div>{props.login} <LoginIcon onClick={props.logoutTC}>Log out</LoginIcon></div>
                                                : <NavLink to={'/login'}>Login</NavLink>}>
                                <LogoutIcon sx={{fontSize: '35px', color: '#2254f5'}}/>
                            </button>
                        </div>
                        : <></>}
                </div>
            </div>

        </header>
    );


    // return (
    //     <header className={s.header}>
    //         {/*<img src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>*/}
    //         <div className={s.loginBlock}>
    //             {props.isAuth
    //                 ? <div>{props.login} <LoginIcon onClick={props.logoutTC}>Log out</LoginIcon></div>
    //                 : <NavLink to={'/login'}>Login</NavLink>}
    //         </div>
    //     </header>
    // )
}
export default Header;
