import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppPropsType} from "../../../App";

// type PropsType = {
//     posts: PostsPropsType[],
//     // addPost: ()=> void
//     // updateNewPostText: (newText:string)=>void
//     messageForNewPost: string
//     dispatch: (action: ActionsType) => void
// }

export const MyPostsContainer = (props: AppPropsType) => {

    let addPost = () => {
        // props.addPost()
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (newText: string) => {
        let action = updateNewPostTextActionCreator(newText)
        props.store.dispatch(action)
    }
    let state = props.store.getState()
    return (
        <MyPosts
            posts={props.store.getState().profilePage.posts}
            updateNewPostText={onPostChange}
            addPost={addPost}
            messageForNewPost={state.profilePage.messageForNewPost}
        />
    )
}

