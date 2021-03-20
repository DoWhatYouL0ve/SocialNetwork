import React, {ChangeEvent} from "react";
import c from './myposts.module.css'
import {Post} from './Post/post'
import {ActionTypes, PostMessageType, UpdateNewPostTextActionType} from "../../../Redax/state";


type MyPostPropsType = {
    postMessageData: Array<PostMessageType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

export const MyPosts = (props: MyPostPropsType) => {

    let postData = props.postMessageData.map( p => <Post postMessage={p.postMessage} like={p.like}/>)

    let addPost = () => {
        // first method to set action
            props.dispatch({type: 'ADD-POST'})
    }

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // second method to set action
        let action: UpdateNewPostTextActionType = {type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value}
        props.dispatch(action)
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