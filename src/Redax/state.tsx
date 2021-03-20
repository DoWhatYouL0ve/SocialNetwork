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
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type StoreType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    addPost: () => void
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
}

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
            ]}
    },
    getState () {
        return this._state
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    addPost () {
        let newPost: PostMessageType = {
            id: 5,
            postMessage: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.postMessageData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _callSubscriber () {
        console.log('State is changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer // pattern observer похож на pattern publisher
    }
}