import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import React from "react";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App: React.FC<{/* store: StoreType,*/  }> = ({ /*store*/ }) => {
    /*const state = store.getState();*/
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar/>
            <div className="app-booker-content">
                <Routes>
                    <Route path="dialogs/*" element={<DialogsContainer/>} />
                    <Route path="profile/*" element={<Profile />} />
                    <Route path="news/*" element={<News />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;