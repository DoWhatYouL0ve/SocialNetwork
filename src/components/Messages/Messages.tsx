import React, {ChangeEvent} from "react";
import styles from './messanges.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/message";

type MessageType = {
    message: string
    id: number
}
type DialogType = {
    name: string
    id: number
}

type MessagesPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

type MessagesPropsType = {
    messagesPage: MessagesPageType
    onNewMessageChange: (text: string) => void
    onSendMessageClick: () => void
}

export const Messages = (props: MessagesPropsType) => {

    let dialogElements = props.messagesPage.dialogsData.map( (d) => <Dialog name={d.name} key={d.id} id={d.id}/> )

    let messageElements = props.messagesPage.messagesData.map( m => <Message message={m.message} key={m.id}/>)
    let newMessageText = props.messagesPage.newMessageText
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.onNewMessageChange(body)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   placeholder={'Enter your massege'}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}