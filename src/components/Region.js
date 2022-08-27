import { Link, NavLink } from 'react-router-dom';
import StatisticByRegion from "./StatisticByRegion";
import styles from "./Navigation.module.css";

const Region = (region) => {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : undefined;
    }

    return (
        <>
            <h2>Region</h2>
            <ul className={'ul_region'}>
                <li>ISO: {region.region.iso}</li>
                <li>Name: {region.region.name}</li>
                <NavLink className={setNavStyle} to={"/statistic/" + region.region.iso} >Count of cases</NavLink>
            </ul>

        </>
    );
};

export default Region;
