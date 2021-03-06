import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Store} from "redux";
import {AppReduxStoreType} from "./Redux/store-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersConteiner from "./components/Users/usersContainer";
import {LoginFormik} from "./components/Login/LoginFormik";



export type AppPropsType = {
    store: Store<AppReduxStoreType, any>
}

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               // dialogsPage={state.dialogsPage}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               // store={props.store}
                           />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                               // profilePage={state.profilePage}
                               // dispatch={props.store.dispatch.bind(props.store)}
                               // store={props.store}
                           />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={()=><UsersConteiner />}/>
                    <Route path='/login' render={()=><LoginFormik/>}/>

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
