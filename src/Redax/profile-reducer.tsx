import {ActionTypes} from "./redux-store";
import {UserProfileType} from "../components/Profile/ProfileContainer";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostMessageType = {
    id: number
    like: number
    postMessage: string
}


let initialState = {
        newPostText: '',
        postMessageData: [
            {id: 1, like: 15, postMessage: 'Hi, how are you?'},
            {id: 2, like: 13, postMessage: "it styles my first post"},
            {id: 3, like: 17, postMessage: "I'm OK"}
        ],
        profile: {
            aboutMe: "я круто чувак 1001%",
            contacts: {
                facebook: "facebook.com",
                website: null,
                vk: "vk.com/dimych",
                twitter: "https://twitter.com/@sdf",
                instagram: "instagra.com/sds",
                youtube: null,
                github: "github.com",
                mainLink: null
            },
            lookingForAJob: true,
            lookingForAJobDescription: "не ищу, а дурачусь",
            fullName: "samurai dimych",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        }
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostMessageType = {
                id: 5,
                postMessage: state.newPostText,
                like: 0
            }
            return {...state, postMessageData: [...state.postMessageData, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newText: string) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile:UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)