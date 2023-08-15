import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


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
