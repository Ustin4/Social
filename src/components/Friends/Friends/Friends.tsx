import React from "react";
import s from "./Friends.module.css";


type PropsType = {
    friends:Array<any>
};

const Friends: React.FC<PropsType> = ({ friends }) => {

    return (
        <div>
            <h1>Friends</h1>
            <div>
                {friends.map((m) => (
                    <div key={m.id}>{m.name} </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;