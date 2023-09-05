import React from 'react';
import './index.scss';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// @ts-ignore
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>

        </React.StrictMode>
    </BrowserRouter>
);





