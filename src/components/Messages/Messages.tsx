import React from "react";
import styles from './messanges.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/message";
import {MessagesPageType} from "../../Redax/state";

type MessagesPropsType = {
    messagesPage: MessagesPageType
}

export const Messages = (props: MessagesPropsType) => {

    let dialogElements = props.messagesPage.dialogsData.map( (d) => <Dialog name={d.name} id={d.id}/> )

    let messageElements = props.messagesPage.messagesData.map( m => <Message message={m.message} />)


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialog_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
}