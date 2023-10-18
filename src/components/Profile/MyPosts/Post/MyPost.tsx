import React from "react";
// // // import s from './Post.module.css'
// // //
// // //
// // // type PropsType = {
// // //     messages: string;
// // //     likesCount: number;
// // // };
// // //
// // // const Post: React.FC<PropsType> = ({ messages, likesCount }) => {
// // //     return (
// // //         <div className={s.item}>
// // //             <img
// // //                 src={
// // //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2RaRvGN0HgKhbpTHaK9QlJ0IorzE0EdXqg&usqp=CAU"
// // //                 }
// // //                 alt="post-avatar"
// // //             />
// // //             {messages}
// // //             <div>
// // //                 <span>Like</span> {likesCount}
// // //             </div>
// // //         </div>
// // //     );
// // // };
// // //
// // // export default Post;
// // //
// //
// //
// import s from './MyPosts.module.scss';
// import {useCallback} from 'react';
// import React from 'react';
// import {useAppDispatch, useAppSelector} from "../../../../redux/redux-store";
// import {useSelector} from "react-redux";
// import Post from "./Post";
// import {MyPostsForm} from "../MyPostsForm";
// import {addPostActionCreator} from "../../../../redux/profile-reducer";
//
// type MyPostsPropsType = {
//     avatar: string | undefined
//     name: string | undefined
// };
// export const MyPosts = React.memo(({avatar, name}: MyPostsPropsType) => {
//     const dispatch = useAppDispatch();
//     const posts = useAppSelector(state => state.profilePage.posts);
//     const postsElements = posts.map(m => <Post key={m.id} id={m.id} post={m.post} avatar={avatar} name={name}
//                                                likesCount={m.likesCount} />);
//
//     const addPostHandler = useCallback((value: string) => {
//         const newPost = value.trim();
//         if (newPost) {
//             dispatch(addPostActionCreator(newPost));
//         }
//     }, [dispatch]);
//
//     return (
//         <div className={s.myPosts}>
//             <div className={s.postForm}>
//                 <MyPostsForm  addPost={addPostHandler}/>
//             </div>
//             <div className={s.allPosts}>
//                 {postsElements}
//             </div>
//
//         </div>
//     );
// });