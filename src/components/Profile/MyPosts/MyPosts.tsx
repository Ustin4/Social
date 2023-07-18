import React, {RefObject} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType,} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>;
    newPostText: string;
    updateNewPostText: (text: string) => void
    addPost:()=>void
};

const MyPosts: React.FC<PropsType> = ({
                                          posts,
                                          newPostText,
                                          updateNewPostText,
                                          addPost
                                      }) => {


    let postsElements = posts.map((p) => (
        <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
    ));

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPostClickHandler = () => {
      addPost()
    };

    const onChangePostHandler = () => {
        let text = newPostElement.current?.value || "";
        //dispatch(updateNewPostTextActionCreator(text));
        updateNewPostText(text)
    };

    return (
        <div className={s['postsBlock']}>
            <h3>My posts</h3>
            <div>
                <div>
          <textarea
              ref={newPostElement}
              onChange={onChangePostHandler}
              value={newPostText}
          />
                </div>
                <div>
                    <button onClick={addPostClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;