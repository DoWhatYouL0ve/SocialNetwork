import React from "react";
import {
    ActionTypes,
    PostMessageType} from "../../../Redax/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/profile-reducer";
import {MyPosts} from "./myposts";


type MyPostPropsContainerType = {
    postMessageData: Array<PostMessageType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}


export const MyPostsContainer = (props: MyPostPropsContainerType) => {

    let addPost = () => {
        // props.store.dispatch(addPostActionCreator())
        props.dispatch(addPostActionCreator())
    }

    const newPostChange = (text: string) => {
        // props.store.dispatch(updateNewPostTextActionCreator(text))
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return ( <MyPosts newPostChange={newPostChange}
                      addPost={addPost}
                      postMessageData={props.postMessageData}
                      newPostText={props.newPostText}/>  )
}