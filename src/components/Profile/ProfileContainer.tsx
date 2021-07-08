import React from "react";
import {Profile} from "./profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {getUserProfile} from "../../Redax/profile-reducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";

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
            userId = '2'
        }
        // using thunk
        this.props.getUserProfile(userId)
    }

    render () {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

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
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)