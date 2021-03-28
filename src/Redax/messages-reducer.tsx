import {ActionTypes, MessagesPageType} from "./store";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Jack'},

        {id: 4, name: 'Tom'},
        {id: 5, name: 'Helen'},
        {id: 6, name: 'Daniel'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Did you go to the cinema yesterday?'},
        {id: 4, message: 'have you ever ride a horse?'},
        {id: 5, message: 'Nice to see you'},
        {id: 6, message: 'God bless this moment'}
    ],
        newMessageText: ''
    }

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messagesData.push({id: 7, message: body})
            return state
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const updateNewMessageTextActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body}as const)
export const sentMessageActionCreator = () => ({type: SEND_MESSAGE} as const)