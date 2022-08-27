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
            <div className={'ul_region'}>
                ISO: {region.region.iso}<br/>
                Name: {region.region.name}<br/>
                <NavLink className={setNavStyle} to={"/statistic/" + region.region.iso}>Count of cases</NavLink>
            </div>

        </>
    );
};

export default Region;
