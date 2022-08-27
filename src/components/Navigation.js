import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import './NavMenu.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <nav>
            <div>
                <NavLink className={setNavStyle} to="/" ><em>Home</em></NavLink>
            </div>
            <div>
                <NavLink
                    to="/regions"
                    // style={({isActive}) => ({
                    //     background: isActive ? 'blue' : 'lightgray'
                    // })}
                    className={setNavStyle}>
                    Regions
                </NavLink>
            </div>
        </nav>
    );
}
