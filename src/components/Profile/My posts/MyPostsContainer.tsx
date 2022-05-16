import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppPropsType} from "../../../App";
import {StoreContext} from "../../../StoreContext";

// type PropsType = {
//     posts: PostsPropsType[],
//     // addPost: ()=> void
//     // updateNewPostText: (newText:string)=>void
//     messageForNewPost: string
//     dispatch: (action: ActionsType) => void
// }

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let addPost = () => {
                    // props.addPost()
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (newText: string) => {
                    let action = updateNewPostTextActionCreator(newText)
                    store.dispatch(action)
                }
                let state = store.getState()


                return <MyPosts posts={state.profilePage.posts}
                                updateNewPostText={onPostChange}
                                addPost={addPost}
                                messageForNewPost={state.profilePage.messageForNewPost}
                />
            }}
        </StoreContext.Consumer>
    )
}

