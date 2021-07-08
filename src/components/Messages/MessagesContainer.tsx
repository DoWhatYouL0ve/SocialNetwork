import React from "react";
import {
    InitialStateType,
    sentMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redax/messages-reducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {Dispatch} from 'redux'
import {AppStateType} from "../../Redax/redux-store";



type MapStateToPropsType = {
    messagesPage: InitialStateType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        onSendMessageClick: () => {
            dispatch(sentMessageActionCreator())
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)