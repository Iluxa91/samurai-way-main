import React from "react";
import {addPostActionCreator, PostsPropsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppReduxStoreType} from "../../../redux/store-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsPropsType>
}
type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}

export type MyPostPropsType = MapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppReduxStoreType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
