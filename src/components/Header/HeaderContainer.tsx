import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import {AppRootStateType, StateType} from "../../redux/redux-store";


type HeaderContainerProps = {
    isAuth: boolean;
    login: string | null;
    darkMode:boolean
};


class HeaderContainer extends React.Component<HeaderContainerProps, HeaderContainerProps> {

render() {

        return <Header   logoutTC={logoutTC}  {...this.props}/>
    }
}
const mapStateToProps = (state:AppRootStateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    darkMode:state.darkMode.darkMode

})
export default connect(mapStateToProps, {logoutTC})(HeaderContainer);
