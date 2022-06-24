import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}
export default Header;