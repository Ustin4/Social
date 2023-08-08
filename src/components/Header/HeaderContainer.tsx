import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {DataType, getAuthUserData, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {authAPI, userAPI} from "../../api/api";


type HeaderContainerProps = {
    isAuth: boolean;
    login: string | null;
    getAuthUserData:()=>void
};

class HeaderContainer extends React.Component<HeaderContainerProps, HeaderContainerProps> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:StateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
