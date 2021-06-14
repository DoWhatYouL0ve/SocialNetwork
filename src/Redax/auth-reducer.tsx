import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

//export type InitialStateType = typeof initialState
type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

//an example if you need to refactor a function with an object inside and "as const" in the end
export const setAuthUserData = (id: number, email: string, login: string) => ({type: SET_USER_DATA, data: {id, email, login} })


type ActionTypes =  ReturnType<typeof setAuthUserData>

//thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}