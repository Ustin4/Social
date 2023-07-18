import React from "react";
import s from "./Friends.module.css";
import {FriendType, SitebarType} from "../../redux/store";

type PropsType = {
    sidebar: SitebarType;
};

const Friends: React.FC<PropsType> = ({ sidebar }) => {
    return (
        <div>
            <h1>Friends</h1>
            <div className={s.circle}> </div>
            <div className={s.circle}> </div>
            <div className={s.circle}> </div>

            <div>
                {sidebar.Friend.map((m) => (
                    <div key={m.id}>{m.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Friends;