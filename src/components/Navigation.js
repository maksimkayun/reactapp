import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <nav>
            <ul>
                <li><NavLink className={setNavStyle} to="/" ><em>Home</em></NavLink></li>

                <li>
                    <NavLink
                        to="/regions"
                        // style={({isActive}) => ({
                        //     background: isActive ? 'blue' : 'lightgray'
                        // })}
                        className={setNavStyle}>
                        Regions
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
