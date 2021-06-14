import React from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redax/redux-store";
import {getAuthUserData} from "../../Redax/auth-reducer";


type HeaderContainerInitialType = {
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

class HeaderContainerInitial extends React.Component<HeaderContainerInitialType> {

    componentDidMount() {
        //{withCredentials: true} - for sending login info to the server
        this.props.getAuthUserData()
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

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainerInitial)