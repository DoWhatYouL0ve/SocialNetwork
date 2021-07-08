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
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";



type MapStateToPropsType = {
    messagesPage: InitialStateType
}
type MapDispatchToPropsType = {
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Messages)

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)