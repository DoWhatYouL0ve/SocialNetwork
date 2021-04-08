import {ActionTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'

type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    photoUrl: string
    location: UserLocationType
}

let initialState: InitialStateType = {
    users: [
        /*{id: 1, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: true, fullName: 'Vladimir', status: 'Hi, how are you?', location: {city: 'Wroclaw', country: 'Poland'}},
        {id: 2, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: true, fullName: 'Bob', status: 'Life is good!', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: false, fullName: 'David', status: 'Keep going...', location: {city: 'Berlin', country: 'Germany'}},
        {id: 4, photoUrl: 'https://mysuperparis.com/upload/resize_cache/iblock/82b/400_400_1/Avatarki_kruglye_09.png', followed: false, fullName: 'John', status: 'I\'m on my way', location: {city: 'Paris', country: 'France'}}*/
    ]
}

//export type InitialStateType = typeof initialState
export type InitialStateType = {
    users: UserType[]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                } return u
            })}
        case UNFOLLOW:
            return {...state, users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }return u
                })}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const followActionCreator = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowActionCreator = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersActionCreator = (users: UserType[]) => ({type: SET_USERS, users} as const)
