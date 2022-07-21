import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {MyPostPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

export const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <NewPostFormik addPost={props.addPost}/>
        <div className={s.posts}>New posts</div>
        {postsElement}
    </div>
}

type NewPostFormikPropsType = {
    addPost: (newPostText: string) => void
}
export const NewPostFormik = (props: NewPostFormikPropsType) => {
    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: values => {
            props.addPost(values.newPostText)

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                          name="newPostText"
                          onChange={formik.handleChange}
                          value={formik.values.newPostText}
                />
            </div>
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}