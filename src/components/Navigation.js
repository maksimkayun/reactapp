import {Link, NavLink} from 'react-router-dom';
import './NavMenu.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive ? 'active' : undefined;
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={setNavStyle}><em>Home</em></NavLink>
                </li>
                <li>
                    <NavLink className={setNavStyle} to="/regions">
                        <em>Regions</em>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
