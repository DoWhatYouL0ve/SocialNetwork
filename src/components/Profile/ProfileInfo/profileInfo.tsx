import React from "react";
import c from './profileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i.pinimg.com/736x/7e/55/d6/7e55d6a9ba562e8f1f0b61af662d2970.jpg" alt="image"/>
            </div>
            <div className={c.description}>
                <img src="https://displaypt.com/wp-content/uploads/2018/10/TEAM-200x200.png" alt="foto"/> + description
            </div>
        </div>
    )
}