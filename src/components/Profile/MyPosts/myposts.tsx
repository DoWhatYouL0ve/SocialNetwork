import React, {ChangeEvent} from "react";
import c from './myposts.module.css'
import {Post} from './Post/post'
import {
    ActionTypes,
    PostMessageType} from "../../../Redax/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/profile-reducer";


type MyPostPropsType = {
    postMessageData: Array<PostMessageType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}


export const MyPosts = (props: MyPostPropsType) => {

    let postData = props.postMessageData.map( p => <Post postMessage={p.postMessage} like={p.like}/>)

    let addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={c.postsblock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={newPostChange} name="NewPost" id="1" cols={30} rows={2}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>

                </div>
            </div>
            <div className={c.posts}>
                {postData}
            </div>

        </div>
    )
}