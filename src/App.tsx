import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App: React.FC<{/* store: StoreType,*/  }> = ({ /*store*/ }) => {
    /*const state = store.getState();*/
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-booker-content">
                <Routes>
                    <Route path="dialogs/*" element={<DialogsContainer/>} />
                    <Route path="profile/:userId?" element={<ProfileContainer />} />
                    <Route path="news/*" element={<News />} />
                    <Route path="users/*" element={<UsersContainer/>} />
                    <Route path="login/*" element={<Login/>} />
                </Routes>
            </div>
        </div>
    );
};

export default App;