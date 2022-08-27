import Statistic from "./Statistic";
import {Component, useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

export class StatisticByRegion extends Component {
    constructor(props) {
        super(props);
        this.state = { report: {}, loading: true, isoparam: "" };
    }

    reportTable(report) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    <tr key={report.data.date}>
                        <td>{report.data.date}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.reportTable(this.state.report);

        return (
            <div>
                <h1 id="tabelLabel" >Report</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    componentDidMount() {
        this.populateReportData();
    }

    populateReportData() {
        let now = new Date();
        let day = now.getUTCDate() < 10 ? `0${now.getUTCDate()}` : now.getUTCDate();
        let month = now.getUTCMonth() < 10 ? `0${now.getUTCMonth()}` : now.getUTCMonth();
        let year = now.getFullYear();

        let { iso } = this.props.params;
        let request = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${iso}`;
        console.log(request);

        fetch(request)
            .then(response => response.json())
            .then(res => {
                this.setState({ report: res, loading: false, isoparam:iso.toString() })
            });
    }
}

// const StatisticByRegion = () => {
//     const { iso } = useParams();
//     this.state({report:{}, loading: true});
//     const navigate = useLocation();
//
//     let now = new Date();
//     let day = now.getUTCDate() < 10 ? `0${now.getUTCDate()}` : now.getUTCDate();
//     let month = now.getUTCMonth() < 10 ? `0${now.getUTCMonth()}` : now.getUTCMonth();
//     let year = now.getFullYear();
//
//     let request = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${iso}`;
//     console.log(request);
//     useEffect(() => {
//         const response = fetch(request);
//         const data = response.json();
//         this.setState({ report: data, loading: false });
//     }, [navigate]);
//     console.log(this.);
//
//     return(
//
//             <table className='table table-striped' aria-labelledby="tabelLabel">
//                 <thead>
//                 <tr>
//                     <th>Date</th>
//
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {totalReport.map(r =>
//                     <tr key={r.date}>
//                         <td>{r.date}</td>
//                     </tr>
//                 )}
//                 </tbody>
//             </table>
//     );
// }

export default withParams(StatisticByRegion);