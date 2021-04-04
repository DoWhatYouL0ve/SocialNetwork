import {ActionTypes} from "./redux-store";

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type PostMessageType = {
    id: number
    like: number
    postMessage: string
}


let initialState = {
        newPostText: '',
        postMessageData: [
            {id: 1, like: 15, postMessage: 'Hi, how are you?'},
            {id: 2, like: 15, postMessage: "it styles my first post"},
            {id: 3, like: 15, postMessage: "I'm OK"}
        ]
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

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