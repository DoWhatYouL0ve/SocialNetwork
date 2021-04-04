import React from "react";
import {
    addPostActionCreator,
    PostMessageType,
    updateNewPostTextActionCreator
} from "../../../Redax/profile-reducer";
import {MyPosts} from "./myposts";
import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {AppStateType} from "../../../Redax/redux-store";

type MapStateToPropsType = {
    newPostText: string
    postMessageData: PostMessageType[]
}

type MapDispatchToPropsType = {
    addPost: () => void
    newPostChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        postMessageData: state.profilePage.postMessageData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        newPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)