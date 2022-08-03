import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {MyPostPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

export const MyPosts = React.memo((props: MyPostPropsType) => {

    let postsElement = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <NewPostFormik addPost={props.addPost}/>
        <div className={s.posts}>New posts</div>
        {postsElement}
    </div>
})

type NewPostFormikPropsType = {
    addPost: (newPostText: string) => void
}
type FormikErrorType = {
    newPostText?: string
}

export const NewPostFormik = (props: NewPostFormikPropsType) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.newPostText){errors.newPostText='Required'}
            else if (values.newPostText.length>10){errors.newPostText="Max length is 10 symbols"}
            return errors
        },
        onSubmit: values => {
            debugger
            props.addPost(values.newPostText)

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    className = {formik.errors.newPostText? s.error : ''}
                    placeholder={'Post message'}
                          {...formik.getFieldProps('newPostText')}
                />
                {formik.touched.newPostText && formik.errors.newPostText && <div style={{color:'red'}}>{formik.errors.newPostText}</div>}
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}