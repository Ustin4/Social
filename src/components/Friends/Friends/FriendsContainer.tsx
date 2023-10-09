import {connect, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {useEffect} from "react";
import Friends from "./Friends";
import {compose} from "redux";
import {getFriendTC} from "../../../redux/sidebar-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


type Props = {
    getFriendTC: (friendsFlag: boolean, count: number) => void
    pageSize: number;
}

const FriendContainer = (props: Props) => {

    const friends = useSelector((state: AppRootStateType) => state.sidebar.friends)

    useEffect(() => {
        props.getFriendTC(true, props.pageSize)
    }, [])

    return (
        <Friends friends={friends}/>
    )

}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        friendsFlag: state.sidebar.friendsFlag,
        friendNavContainerPageSize: state.sidebar.pageSize

    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getFriendTC}),
    withAuthRedirect
)(FriendContainer)
;

