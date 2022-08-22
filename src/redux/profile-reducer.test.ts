import {
    addPostActionCreator, deletePost,
    PostsPropsType,
    profileReducer
} from "./profile-reducer";

let startState = {
    posts: [
        {id: 1, message: "How are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 12},
        {id: 3, message: "I am glad to see you", likesCount: 12}
    ] as Array<PostsPropsType>,
    profile: null,
    status: '',
    profileErrorMessage: ''
}

it('new post should be added',()=>{

    let action = addPostActionCreator('it-incubator')

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(4)
})

it('message of new post should be correct',()=>{

    let action = addPostActionCreator('it-incubator')

    let newState = profileReducer(startState, action)

    expect(newState.posts[0].message).toBe('it-incubator')
})

it('after deleting length of messages should be decrement',()=>{

    let action = deletePost(1)

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(2)
})

it('after deleting length should not be decrement if id is incorrect',()=>{

    let action = deletePost(1000)

    let newState = profileReducer(startState, action)

    expect(newState.posts.length).toBe(3)
})