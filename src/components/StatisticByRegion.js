import { Component } from "react";
import { useParams} from "react-router-dom";
import './NavMenu.css';

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
            <table className='table' aria-labelledby="tabelLabel">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                <tr key={report.data.date}>
                    <td>{report.data.date}</td>
                    <td>{report.data.confirmed}</td>
                    <td>{report.data.deaths}</td>
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
            <div align={'center'}>
                <h1 id="tabelLabel" >Report by region: {this.state.isoparam}</h1>
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

export default withParams(StatisticByRegion);