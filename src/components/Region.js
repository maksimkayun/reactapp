import { Link, NavLink } from 'react-router-dom';
import StatisticByRegion from "./StatisticByRegion";
import styles from "./Navigation.module.css";
import "./NavMenu.css";

const Region = (region) => {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <>
            <table className={'table-region'} >
                <tr><th>ISO</th><td><NavLink className={setNavStyle} to={"/statistic/" + region.region.iso}>{region.region.iso}</NavLink></td></tr>
                <tr><th>Name</th><td>{region.region.name}</td></tr>
            </table>
        </>
    );
};

export default Region;
