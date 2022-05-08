import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React, {ChangeEvent, LegacyRef, MouseEventHandler} from "react";
import {
    ActionsType,
    addPostActionCreator,
    PostsPropsType,
    updateNewPostTextActionCreator,
} from "../../../Redux/state";



type PropsType = {
    posts: PostsPropsType[],
    // addPost: ()=> void
    // updateNewPostText: (newText:string)=>void
    messageForNewPost: string
    dispatch: (action:ActionsType)=>void
}



export const MyPosts = (props: PropsType) => {

    // let postData = [
    //     {id: 1, message: "How are you", likesCount: 12},
    //     {id: 2, message: "It's my first post", likesCount: 12},
    //     {id: 2, message: "Blalbvla", likesCount: 12}
    // ]
    let postsElement = props.posts.map(el => <Post likesCount={el.likesCount} message={el.message}/>)


    // let addPost = () => {props.addPost(props.posts)}
    // const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {props.addPost(e.currentTarget.value)}

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        let newText = newPostElement.current!.value
        // props.updateNewPostText(newText)
        props.dispatch(updateNewPostTextActionCreator(newText))
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          value={props.messageForNewPost}
                          onChange={onPostChange}
                />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>New posts</div>
            {postsElement}
            {/*<Post likesCount={postData[0].likesCount} message={postData[0].message}/>*/}
            {/*<Post likesCount={postData[1].likesCount} message={postData[1].message}/>*/}
        </div>
    </div>
}

