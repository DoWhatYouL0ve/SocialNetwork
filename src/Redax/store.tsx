import {
    ADD_POST,
    addPostActionCreator,
    profileReducer,
    UPDATE_NEW_POST_TEXT,
    updateNewPostTextActionCreator
} from "./profile-reducer";
import {
    messagesReducer,
    SEND_MESSAGE, sentMessageActionCreator,
    UPDATE_NEW_MESSAGE_TEXT,
    updateNewMessageTextActionCreator
} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessageType = {
    message: string
    id: number
}
type DialogType = {
    name: string
    id: number
}
type PostMessageType = {
    id: number
    like: number
    postMessage: string
}
type ProfilePageType = {
    postMessageData: Array<PostMessageType>
    newPostText: string
}

type MessagesPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: {}
}

// an example of auto type difinition for our action creator functions
type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator> | ReturnType<typeof sentMessageActionCreator>


type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}

/*let store: StoreType = {
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
        },

        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}*/

export default 3

