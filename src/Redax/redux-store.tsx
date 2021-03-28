import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    // the same as: profileReducer: profileReducer if you see only profileReducer in object
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers)