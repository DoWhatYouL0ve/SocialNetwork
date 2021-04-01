import React, {ChangeEvent} from "react";
import c from './myposts.module.css'
import {Post} from './Post/post'
import {PostMessageType} from "../../../Redax/store";



type MyPostPropsType = {
    addPost: () => void
    newPostChange: (text:string) => void
    postMessageData: Array<PostMessageType>
    newPostText: string
}


export const MyPosts = (props: MyPostPropsType) => {

    let postData = props.postMessageData.map( p => <Post postMessage={p.postMessage} like={p.like}/>)

    let addPost = () => {
        props.addPost()
    }

    const newPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostChange(e.currentTarget.value)
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