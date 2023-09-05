import React from "react";
import s from './Post.module.css'


type PropsType = {
    messages: string;
    likesCount: number;
    name:string
    date:string
};

const Post: React.FC<PropsType> = ({ messages, likesCount,name,date }) => {
    return (
        <div className={s.post}>
            <div>
                <div className={s.info}>
                    <div className={s.avatar}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2RaRvGN0HgKhbpTHaK9QlJ0IorzE0EdXqg&usqp=CAU"}
                                    alt="post-avatar"
                                />
                    </div>
                    <div className={s.name}>{name}</div>
                    <div className={s.date}>Published: {date}</div>
                </div>
                <div className={s.text}>{messages}</div>
            </div>
        </div>
    )

};

export default Post;

//
// return (
//     <div className={s.item}>
//         <img
//             src={
//                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2RaRvGN0HgKhbpTHaK9QlJ0IorzE0EdXqg&usqp=CAU"
//             }
//             alt="post-avatar"
//         />
//         {messages}
//         <div>
//             <span>Like</span> {likesCount}
//         </div>
//     </div>
// );