import React from "react";
import {UserType} from "../../Redax/users-reducer";
import styles from '../Users/users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
debugger
    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: true, fullName: 'Vladimir', status: 'Hi, how are you?', location: {city: 'Wroclaw', country: 'Poland'}},
            {id: 2, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: true, fullName: 'Bob', status: 'Life is good!', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: false, fullName: 'David', status: 'Keep going...', location: {city: 'Berlin', country: 'Germany'}},
            {id: 4, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: false, fullName: 'John', status: 'I\'m on my way', location: {city: 'Paris', country: 'France'}}
        ])
    }

    return (
        <div>
            {props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.photo} />
                    </div>
                    <div>
                        {u.followed?
                            <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>:
                            <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}