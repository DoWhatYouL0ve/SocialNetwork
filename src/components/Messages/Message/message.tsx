import styles from "./message.module.css";
import React from "react";


type MessagePropsType = {
    message: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}