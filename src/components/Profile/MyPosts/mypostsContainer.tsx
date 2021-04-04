import React from "react";
import {
    ActionTypes,
    PostMessageType
} from "../../../Redax/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/profile-reducer";
import {MyPosts} from "./myposts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {

    //<StoreContext.Consumer>
    //             SHOULD ALWAYS STAR FROM A NEW LINE LIKE THIS EXAMPLE!!!
    //             {(store) => {

    return (
        <StoreContext.Consumer>

            {(store) => {

            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }
            const newPostChange = (text: string) => {
                store.dispatch(updateNewPostTextActionCreator(text))
            }

            return <MyPosts newPostChange={newPostChange}
                            addPost={addPost}
                            postMessageData={store.getState().profilePage.postMessageData}
                            newPostText={store.getState().profilePage.newPostText}/>
        }
        }
        </StoreContext.Consumer>
    )
}