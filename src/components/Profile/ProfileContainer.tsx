import React from "react";
import {Profile} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {setUserProfile} from "../../Redax/profile-reducer";

export type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfileContainerType>{

    // for side effects
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

type PhotosType = {
    small: string
    large: string
}

export type UserProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

type MapStateToPropsType = {
    profile: UserProfileType
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)