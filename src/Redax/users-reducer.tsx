import {ActionTypes} from "./redux-store";

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

type UserLocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    big: string
}

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: PhotosType
    location: UserLocationType
}

let initialState: InitialStateType = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

//export type InitialStateType = typeof initialState
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const follow = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

