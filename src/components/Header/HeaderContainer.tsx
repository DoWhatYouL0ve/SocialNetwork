import React from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../Redax/redux-store";
import {setAuthUserData} from "../../Redax/auth-reducer";

type HeaderContainerInitialType = {
    isAuth: boolean
    login: string | null
    setAuthUserData: (id: number, email: string, login: string) => void
}

class HeaderContainerInitial extends React.Component<HeaderContainerInitialType> {

    componentDidMount() {
        //{withCredentials: true} - for sending login info to the server
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }

}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerInitial)