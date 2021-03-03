let rerenderEntireTree = () => {
    console.log('State is changed')
}

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

export let state: StateType = {
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
}


export const addPost = () => {
    let newPost: PostMessageType = {
        id: 5,
        postMessage: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.postMessageData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer // pattern observer похож на pattern publisher
}