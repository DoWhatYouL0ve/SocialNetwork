export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Jack'},
        {id: 4, name: 'Tom'},
        {id: 5, name: 'Helen'},
        {id: 6, name: 'Daniel'}
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Did you go to the cinema yesterday?'},
        {id: 4, message: 'have you ever ride a horse?'},
        {id: 5, message: 'Nice to see you'},
        {id: 6, message: 'God bless this moment'}
    ] as Array<MessageType>,
        newMessageText: ''
}

export const messagesReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageText
            return {...state, newMessageText: '', messagesData: [...state.messagesData, {id: 7, message: body}]}
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const updateNewMessageTextActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body}as const)
export const sentMessageActionCreator = () => ({type: SEND_MESSAGE} as const)

type ActionsType =
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof sentMessageActionCreator>