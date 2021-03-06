import React from "react";
import {Profile} from "./profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redax/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

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
        if (!userId) {
            userId = '6314'
        }
        // using thunk
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render () {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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
    status: string
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

