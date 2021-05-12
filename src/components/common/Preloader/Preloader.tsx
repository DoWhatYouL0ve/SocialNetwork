import React from "react";
import preloader from "../../../assets/images/loading.gif";
import styles from './preloader.module.css'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}