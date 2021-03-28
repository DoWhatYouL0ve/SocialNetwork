import React from "react";
import c from './profile.module.css'
import {MyPosts} from "./MyPosts/myposts";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionTypes, ProfilePageType} from "../../Redax/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postMessageData={props.profilePage.postMessageData}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}