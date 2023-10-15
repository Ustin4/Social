import {connect, useSelector} from "react-redux";
import {useEffect} from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {AppRootStateType} from "../../redux/redux-store";
import FriendsNav from "./FriendsNav";


type Props = {
    getFriendTC: (friendsFlag: boolean, count: number) => void
    pageSize: number;
}

const FriendNavContainer = (props: Props) => {

    const friends = useSelector((state: AppRootStateType) => state.sidebar.friends)

    useEffect(() => {
    }, [])

    return (
        <FriendsNav friends={friends}/>
    )

}

let mapStateToProps = (state: AppRootStateType) => {
    return {}
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {}),
    withAuthRedirect
)(FriendNavContainer)
;

