import React from "react";
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import Friends from "./Friends";

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