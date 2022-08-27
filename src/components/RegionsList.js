import { useEffect, useState } from "react";
import Region from "./Region";

const RegionsList = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        fetch('https://covid-api.com/api/regions?per_page=20')
            .then(res => res.json())
            .then(result => {
                setRegions(result.data);
            });
    }, []);

    return (
        <>
            <h3>Regions</h3>
            <ul className={'ul_region'}>
                {regions.map(r => <Region key={r.name} region={r}/>)}
            </ul>
        </>
    )
}

export default RegionsList;
