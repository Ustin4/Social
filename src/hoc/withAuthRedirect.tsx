import React from "react";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: AppRootStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
};
export function withAuthRedirect(Component:React.ComponentType) {
    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Navigate to='/login'/>;

        return <Component {...restProps}/>;
    };

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}