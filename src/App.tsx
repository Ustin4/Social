import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React, {useEffect} from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {ErrorSnackbar} from "./components/ErrorSnackbar/ErrorSnackbar";
import {connect, useSelector} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppRootStateType, useAppDispatch} from "./redux/redux-store";
import {CircularProgress} from "@mui/material";

const App: React.FC = ({}) => {
    const isInitialized = useSelector((state: AppRootStateType) => state.app.isInitialized)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (!isInitialized) {
        return (
            <div style={{position: "fixed", top: "30%", textAlign: "center", width: "100%"}}>
                <CircularProgress/>
            </div>
        );
    }
    return (
        <div className="app-wrapper">
            <ErrorSnackbar/>
            <HeaderContainer/>
            <div className='app-container'>
                <Navbar/>
                <div className="app-content">
                    <Routes>
                        <Route path="dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="profile/:userId?" element={<ProfileContainer/>}/>
                        <Route path="news/*" element={<News/>}/>
                        <Route path="users/*" element={<UsersContainer/>}/>
                        <Route path="login/*" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};
export default compose(connect(null, {initializeApp})(App));