import React from "react";
import {ActionTypes, MessagesPageType} from "../../Redax/store";
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redax/messages-reducer";
import {Messages} from "./Messages";

type MessagesPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionTypes) => void
}

export const MessagesContainer = (props: MessagesPropsType) => {

    let onSendMessageClick = () => {
        props.dispatch(sentMessageActionCreator())
    }
    let onNewMessageChange = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return ( <Messages onNewMessageChange={onNewMessageChange}
                       onSendMessageClick={onSendMessageClick}
                       messagesPage={props.messagesPage}
                       />)
}