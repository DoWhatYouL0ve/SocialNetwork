import styles from "./dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogType} from "../../../Redax/messages-reducer";


export const Dialog = (props: DialogType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}