import React from "react";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {MyPostsContainer} from './MyPosts/mypostsContainer'
import {UserProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: UserProfileType
    setUserProfile: (profile: UserProfileType) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

