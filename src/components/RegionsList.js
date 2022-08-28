import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import Region from "./Region";
import {useParams} from "react-router-dom";

const RegionsList = () => {
    const [regions, setRegions] = useState([]);
    const [next, setNext] = useState({});
    const [prev, setprev] = useState({});
    const {request} = useParams();

    let navigate = useNavigate();

    let defaultRequest = "https://covid-api.com/api/regions?per_page=5";

    console.log("req: " + request);
    if (request != undefined) {
        defaultRequest = "https://covid-api.com/api/regions?" + request;
        console.log(defaultRequest);
    }

    useEffect(() => {
        fetch(defaultRequest)
            .then(res => res.json())
            .then(result => {
                setRegions(result.data);
                setNext(result.next_page_url);
                setprev(result.prev_page_url);
            }).catch(err => {  })
    }, [navigate]);

    function nextClick(event) {
        navigate('/regions/' + next.split('?')[1]);
    }
    function prevClick(event) {
        navigate('/regions/' + prev.split('?')[1]);
    }

    return (
        <>
            <h3>Regions</h3>
            <div className={'div-table-region'} align={'center'}>
                {regions.map(r => <Region key={r.name} region={r}/>)}
            </div>
            <button onClick={prevClick}>Previos</button>  <button onClick={nextClick} >Next</button>
        </>
    )
}

export default RegionsList;
