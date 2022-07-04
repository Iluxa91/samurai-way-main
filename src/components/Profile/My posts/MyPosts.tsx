import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    newPostText: string
}

export const MyPosts = (props: MyPostPropsType) => {

    let postsElement = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)

    // let addPost = () => {props.addPost(props.posts)}
    // const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {props.addPost(e.currentTarget.value)}
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    // let addPost = () => {
    //     props.addPost()
    //     // props.dispatch(addPostActionCreator())
    // }

    const onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <NewPostReduxForm onSubmit={onAddPost}/>
        <div className={s.posts}>New posts</div>
        {postsElement}
    </div>
}
const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'new post message'} name={'newPostText'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const NewPostReduxForm = reduxForm<FormDataType>({form: 'ProfileAddPostForm'})(AddNewPostForm)
