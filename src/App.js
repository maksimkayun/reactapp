import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import RegionsList from './components/RegionsList';
import './App.css';
import StatisticByRegion from "./components/StatisticByRegion";

function App() {
    return (
        <div className="App">
            <h1>COVID-19 statistics</h1>

            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/regions" element={<RegionsList/>}/>
                <Route path="/regions/:request" element={<RegionsList/>}/>
                <Route path="/statistic/:iso" element={<StatisticByRegion/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
