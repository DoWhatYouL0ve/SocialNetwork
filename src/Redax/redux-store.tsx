import {combineReducers, createStore } from "redux";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {messagesReducer, sentMessageActionCreator, updateNewMessageTextActionCreator} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalUsersCountActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator,
    unfollowActionCreator,
    usersReducer
} from "./users-reducer";

export type ActionTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator> | ReturnType<typeof sentMessageActionCreator> | ReturnType<typeof followActionCreator> | ReturnType<typeof unfollowActionCreator> | ReturnType<typeof setUsersActionCreator> | ReturnType<typeof setCurrentPageActionCreator> | ReturnType<typeof setTotalUsersCountActionCreator> | ReturnType<typeof toggleIsFetchingActionCreator>

let rootReducer = combineReducers({
    // the same as: profileReducer: profileReducer if you see only profileReducer in object
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

