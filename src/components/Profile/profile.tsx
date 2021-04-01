import React from "react";
import c from './profile.module.css'
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionTypes, ProfilePageType} from "../../Redax/store";
import {MyPostsContainer} from "./MyPosts/mypostsContainer";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer postMessageData={props.profilePage.postMessageData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}