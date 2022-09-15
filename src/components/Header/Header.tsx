import {NavLink} from 'react-router-dom';
import logo from '../../assets/image/web-icon-logo.png'
import s from './Header.module.css'

type PropsType = {
    logout: ()=>void
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <img src={logo}/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>
                    <span >{props.login}</span>
                    <button onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header;