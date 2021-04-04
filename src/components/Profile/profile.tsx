import React from "react";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {MyPostsContainer} from './MyPosts/mypostsContainer'


export const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

