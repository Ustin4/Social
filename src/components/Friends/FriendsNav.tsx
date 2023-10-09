import React from "react";
import s from "./Friends/Friends.module.css";
import {SitebarType} from "../../redux/redux-store";


type PropsType = {
    friends:Array<any>
};

const FriendsNav: React.FC<PropsType> = ({ friends }) => {
    return (
        <div>
            <h1>Friends</h1>
            <div className={s.circle}> </div>
            <div className={s.circle}> </div>
            <div className={s.circle}> </div>

            <div>
                {friends.slice(0, 3).map((m) => (
                        <div key={m.id}>{m.name} </div>
                    ))}
            </div>
        </div>
    );
};

export default FriendsNav;