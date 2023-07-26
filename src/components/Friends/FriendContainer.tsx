import React from "react";

import {connect} from "react-redux";
import Friends from "./Friends";
import {StateType} from "../../redux/redux-store";

/*

type PropsType = {
    store: StoreType
};
*/

let mapStateToProps = (state:StateType) => {

    return {
        sidebar: state.sidebar
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {}
}

const  FriendContainer= connect(mapStateToProps,mapDispatchToProps)(Friends)


export default FriendContainer;