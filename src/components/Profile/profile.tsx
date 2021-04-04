import React from "react";
import c from './profile.module.css'
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionTypes, ProfilePageType} from "../../Redax/store";
import {MyPostsContainer} from "./MyPosts/mypostsContainer";


export const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

