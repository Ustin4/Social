import React from "react";
import s from "./MyPosts.module.scss";
import { PostType } from "../../../redux/redux-store";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Post from "./Post/Post";

type PropsType = {
    posts: Array<PostType>;
    addPost: (text: string | undefined) => void;
    darkMode: boolean;
};

const MyPosts: React.FC<PropsType> = ({ posts, addPost, darkMode }) => {
    const formik = useFormik({
        initialValues: {
            send: "",
        },
        onSubmit: (values) => {
            addPost(values.send);
            formik.resetForm();
        },
    });

    let postsElements = posts.map((p) => (
        <Post
            darkMode={darkMode}
            key={p.id}
            messages={p.message}
            likesCount={p.likesCount}
            name={p.name}
            date={p.date}
        />
    ));

    return (
        <div className={`${s.addPost} ${darkMode ? s.darkMode : ""}`}>
            <h3>My posts</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.item}>
                    <TextField
                        className={s.textarea}
                        fullWidth
                        label="Enter your message"
                        id="fullWidth"
                        size={"small"}
                        {...formik.getFieldProps("send")}
                    />
                    {formik.errors.send ? (
                        <div style={{ color: "red" }}>{formik.errors.send}</div>
                    ) : null}
                </div>
                <div>
                    <Button
                        type={"submit"}
                        variant="contained"
                        endIcon={<SendIcon />}
                        className={s.buttonMessages}
                    >
                        add
                    </Button>
                </div>
            </form>
            <div className={s.posts}>{postsElements}</div>
        </div>
    );
};

export default MyPosts;