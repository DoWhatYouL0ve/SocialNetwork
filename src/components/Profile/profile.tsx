import React from "react";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {MyPostsContainer} from './MyPosts/mypostsContainer'
import {UserProfileType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

