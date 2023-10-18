// import React from "react";
// import s from "./MyPosts.module.css";
// import Post from "./Post/Post";
// import {PostType} from "../../../redux/redux-store";
// import {useFormik} from "formik";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import {validateFromMyPosts} from "../../../utils/validator/validators";
//
//
// type PropsType = {
//     posts: Array<PostType>;
//     addPost: (text: string | undefined) => void
// };
//
// const MyPosts: React.FC<PropsType> = React.memo(({
//                                                      posts,
//                                                      addPost
//                                                  }) => {
//     const formik = useFormik({
//         initialValues: {
//             send: '',
//         },
//         validate: (values) => {
//             return validateFromMyPosts(values)
//         },
//
//         onSubmit: (values) => {
//             addPost(values.send)
//             formik.resetForm()
//         }
//     })
//     let postsElements = posts.map((p) => (
//         <Post key={p.id} messages={p.message} likesCount={p.likesCount}/>
//     ));
//     return (
//         <div className={s['postsBlock']}>
//             <h3>My posts</h3>
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//                     <div>
//                         <TextField
//                             fullWidth
//                             label="Enter your message"
//                             id="fullWidth"
//                             size={'small'}
//                             {...formik.getFieldProps('send')}
//                         />
//                         {formik.errors.send ? <div style={{color: "red"}}>{formik.errors.send}</div> : null}
//                     </div>
//                     <div>
//                         <Button
//                             type={"submit"}
//                             variant="contained"
//                             endIcon={<SendIcon/>}
//                             className={s.buttonMessages}
//                         >add
//                         </Button>
//                     </div>
//                 </div>
//                 <div className={s.posts}>{postsElements}</div>
//             </form>
//         </div>
//
//     );
// });
//
// export default MyPosts;



import {ErrorMessage, Field, Form, Formik} from 'formik';
import React from 'react';
import {PostAdd} from '@mui/icons-material';
import {IconButton} from '@mui/material';
import * as Yup from 'yup';
import s from './MyPostsForm.module.scss';

type MyPostsFormType = {
    addPost: (value: string) => void
};

type FormType = {
    postText: string
};

const validationSchema = Yup.object({
    postText: Yup.string()
        .max(300, 'Must be 300 characters or less')
});

export const MyPostsForm = React.memo(({addPost}: MyPostsFormType) => {
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {
        addPost(values.postText);
        setSubmitting(false);
    };
    return <div style={{width: '100%'}}>
        <Formik
            initialValues={{postText: ''}}
            onSubmit={submit}
            validationSchema={validationSchema}
        >
            {
                ({isSubmitting}) => (
                    <Form className={s.myPostsForm}>
                        <IconButton type='submit' disabled={isSubmitting} style={{margin: '0 0 5px 0'}}>
                            <PostAdd color='primary'/>
                        </IconButton>
                        <span>Create post</span>
                        <Field component={'textarea'} name='postText' type='text'
                               placeholder={'What\'s on your mind?'}/>
                        <ErrorMessage name='postText'/>

                    </Form>)
            }
        </Formik>
    </div>;
});