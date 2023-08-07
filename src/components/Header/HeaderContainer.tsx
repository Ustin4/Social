import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {DataType, setUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {userAPI} from "../../api/api";


type HeaderContainerProps = {
    isAuth: boolean;
    login: string | null;
    setUserData: (login: DataType) => void;
};

class HeaderContainer extends React.Component<HeaderContainerProps, HeaderContainerProps> {
    componentDidMount() {
        //this.props.toggleIsFetching(true)
       userAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data.login)
                }
            })

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:StateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login

})


export default connect(mapStateToProps, {setUserData})(HeaderContainer);
