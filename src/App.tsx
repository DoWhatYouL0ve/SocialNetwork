import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {Messages} from './components/Messages/Messages'
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {ActionTypes, StateType} from "./Redax/state";

type AppPropsType = {
    store: StateType
    dispatch: (action: ActionTypes) => void
}

//взять шаблон для соц сети и делать под него проект

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'}
                           render={ () => <Profile profilePage={props.store.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path={'/messages'}
                           render={() => <Messages messagesPage={props.store.messagesPage} />}/>
                    <Route path={'/news'} render={() => <News />}/>
                    <Route path={'/music'} render={ () => <Music />}/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
