import React, {ChangeEvent} from "react";
import styles from './messanges.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/message";
import {
    ActionTypes,
    MessagesPageType, sentMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../Redax/state";

type MessagesPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionTypes) => void
}

export const Messages = (props: MessagesPropsType) => {

    let dialogElements = props.messagesPage.dialogsData.map( (d) => <Dialog name={d.name} id={d.id}/> )

    let messageElements = props.messagesPage.messagesData.map( m => <Message message={m.message} />)
    let newMessageText = props.messagesPage.newMessageText
    let onSendMessageClick = () => {
        props.dispatch(sentMessageActionCreator())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(body))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        value={newMessageText}
                        placeholder={'Enter your massege'}
                        onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}