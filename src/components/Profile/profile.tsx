import React from "react";
import c from './profile.module.css'
import {MyPosts} from "./MyPosts/myposts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ProfilePageType} from "../../Redax/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postMessageData={props.profilePage.postMessageData}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}