import React from "react";
import {Profile} from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {setUserProfile} from "../../Redax/profile-reducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

export type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

// TypeScript for withRoute
type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & ProfileContainerType
// end

class ProfileContainer extends React.Component<PropsType>{

    // for side effects
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)