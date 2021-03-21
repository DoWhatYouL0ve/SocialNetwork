export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number
}

export type PostMessageType = {
    id: number
    like: number
    postMessage: string
}

export type ProfilePageType = {
    postMessageData: Array<PostMessageType>
    newPostText: string
}

export type MessagesPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

// an example of auto type difinition for our action creator functions
export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator> | ReturnType<typeof sentMessageActionCreator>


export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const SEND_MESSAGE = 'SEND-MESSAGE'

export let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            postMessageData: [
                {id: 1, like: 15, postMessage: 'Hi, how are you?'},
                {id: 2, like: 15, postMessage: "it'styles my firts post"},
                {id: 3, like: 15, postMessage: "I'm OK"}
            ]},

        messagesPage: {
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
    },
    _callSubscriber () {
        console.log('State is changed')
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
    this._callSubscriber = observer // pattern observer похож на pattern publisher
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostMessageType = {
                id: 5,
                postMessage: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.postMessageData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        }else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText =  action.newText
            this._callSubscriber()
        }else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.body
            this._callSubscriber()
        }else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageText
            this._state.messagesPage.newMessageText = ''
            this._state.messagesPage.messagesData.push({id: 7, message: body})
            this._callSubscriber()
        }
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const sentMessageActionCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewPostTextActionCreator = (newText: string) => {
    return{
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const updateNewMessageTextActionCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body}as const)