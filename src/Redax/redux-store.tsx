import {combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {messagesReducer, sentMessageActionCreator, updateNewMessageTextActionCreator} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator> | ReturnType<typeof sentMessageActionCreator>

let rootReducer = combineReducers({
    // the same as: profileReducer: profileReducer if you see only profileReducer in object
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)