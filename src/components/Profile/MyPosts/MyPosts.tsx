import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/redux-store";
import {useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {validateFromMyPosts} from "../../../utils/validator/validators";


type PropsType = {
    posts: Array<PostType>;
    addPost: (text: string | undefined) => void
};

const MyPosts: React.FC<PropsType> = ({
                                          posts,
                                          addPost
                                      }) => {
    const formik = useFormik({
        initialValues: {
            send: '',
        },
        validate: (values) => {
            return validateFromMyPosts(values)
        },

        onSubmit: (values) => {
            addPost(values.send)
            formik.resetForm()
        }
    })
    let postsElements = posts.map((p) => (
        <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
    ));
    return (
        <div className={s['postsBlock']}>
            <h3>My posts</h3>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <TextField
                            fullWidth
                            label="Enter your message"
                            id="fullWidth"
                            size={'small'}
                            {...formik.getFieldProps('send')}
                        />
                        {formik.errors.send ? <div style={{color: "red"}}>{formik.errors.send}</div> : null}
                    </div>
                    <div>
                        <Button
                            type={"submit"}
                            variant="contained"
                            endIcon={<SendIcon/>}
                            className={s.buttonMessages}
                        >add
                        </Button>
                    </div>
                </div>
                <div className={s.posts}>{postsElements}</div>
            </form>
        </div>

    );
};

export default MyPosts;