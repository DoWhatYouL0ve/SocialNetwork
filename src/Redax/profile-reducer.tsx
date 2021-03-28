import {ActionTypes, PostMessageType, ProfilePageType} from "./store";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        newPostText: '',
        postMessageData: [
            {id: 1, like: 15, postMessage: 'Hi, how are you?'},
            {id: 2, like: 15, postMessage: "it'styles my firts post"},
            {id: 3, like: 15, postMessage: "I'm OK"}
        ]}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostMessageType = {
                id: 5,
                postMessage: state.newPostText,
                like: 0
            }
            state.postMessageData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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