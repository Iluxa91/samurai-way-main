import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Dialogs from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersConteiner from "./components/Users/usersContainer";
import Login from "./components/Login/LoginFormik";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppReduxStoreType} from "./Redux/store-redux";
import {Preloader} from "./components/Common/Preloader/Preloader";

class App extends React.Component<MapDispatchToPropsType&MapStateToPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs"
                               render={() => <Dialogs/>}/>
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/users" render={() => <UsersConteiner/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: AppReduxStoreType) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps,{initializeApp})(App)
