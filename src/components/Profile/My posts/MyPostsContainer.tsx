import React from "react";

import {addPostActionCreator, PostsPropsType, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../../Redux/store-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsPropsType>
    messageForNewPost: string
}
type mapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}
// type PostsPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }
export type MyPostPropsType = MapStateToPropsType & mapDispatchToPropsType

// type PropsType = {
//     posts: PostsPropsType[],
//     // addPost: ()=> void
//     // updateNewPostText: (newText:string)=>void
//     messageForNewPost: string
//     dispatch: (action: ActionsType) => void
// }

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let addPost = () => {
//                     // props.addPost()
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const onPostChange = (newText: string) => {
//                     let action = updateNewPostTextActionCreator(newText)
//                     store.dispatch(action)
//                 }
//                 let state = store.getState()
//
//
//                 return <MyPosts posts={state.profilePage.posts}
//                                 updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 messageForNewPost={state.profilePage.messageForNewPost}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }
// }

const mapStateToProps = (state: AppReduxStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
