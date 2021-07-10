import React from "react";
import c from './profileInfo.module.css'
import {UserProfileType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: UserProfileType
}

export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/736x/7e/55/d6/7e55d6a9ba562e8f1f0b61af662d2970.jpg" alt="image"/>
            </div>
            <div className={c.description}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'hello my friends'}/>
            </div>
        </div>
    )
}