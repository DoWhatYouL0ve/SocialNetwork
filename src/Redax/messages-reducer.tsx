import {ActionTypes, MessagesPageType} from "./state";

export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export const messagesReducer = (state: MessagesPageType, action: ActionTypes) => {

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