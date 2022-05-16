import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Store} from "redux";
import {AppReduxStoreType} from "./Redux/store-redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
    store: Store<AppReduxStoreType, any>
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // addMessage: () => void
    // updateMessageText: (newMessage: string) => void
}

function App(props: AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               // dialogsPage={state.dialogsPage}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               store={props.store}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               // profilePage={state.profilePage}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               store={props.store}
                           />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
