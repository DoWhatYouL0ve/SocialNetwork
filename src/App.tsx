import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {Nav} from "./components/Nav/nav";
import {Profile} from "./components/Profile/profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


//взять шаблон для соц сети и делать под него проект

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'}
                           render={ () => <Profile />}/>
                    <Route path={'/messages'}
                           render={() => <MessagesContainer />}/>
                    <Route path={'/users'} render={() => <UsersContainer />}/>
                    <Route path={'/news'} render={() => <News />}/>
                    <Route path={'/music'} render={ () => <Music />}/>
                    <Route path={'/settings'} render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
