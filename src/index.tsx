import React, {useContext} from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {ThemeContext, ThemeProvider} from "./utils/Theme/Theme";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// @ts-ignore
root.render(
    <BrowserRouter>
        <ThemeProvider >
        <Provider store={store} >
            <App/>
        </Provider>
        </ThemeProvider>,
    </BrowserRouter>

);





