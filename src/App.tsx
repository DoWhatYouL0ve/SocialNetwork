import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


//взять шаблон для соц сети и делать под него проект

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile/:userId?'}
                           render={ () => <ProfileContainer />}/>
                    <Route path={'/messages'}
                           render={() => <MessagesContainer />}/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/news'} render={() => <News />}/>
                    <Route path={'/music'} render={ () => <Music />}/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>
                    <Route path={'/login'} render={ () => <Login /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
