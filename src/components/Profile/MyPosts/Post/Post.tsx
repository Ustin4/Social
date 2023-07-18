import React from "react";
import s from './Post.module.css'


type PropsType = {
    messages: string;
    likesCount: number;
};

const Post: React.FC<PropsType> = ({ messages, likesCount }) => {
    return (
        <div className={s.item}>
            <img
                src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2RaRvGN0HgKhbpTHaK9QlJ0IorzE0EdXqg&usqp=CAU"
                }
                alt="post-avatar"
            />
            {messages}
            <div>
                <span>Like</span> {likesCount}
            </div>
        </div>
    );
};

export default Post;


