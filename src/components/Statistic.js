
const Statistic = (total) => {
    console.log(total);
    return (
        <>
            <div>date: {total.data.date}</div>
            <div>last update: {total.data.last_update}</div>
            <div>confirmed: {total.data.confirmed}</div>
            <div>deaths: {total.data.deaths}</div>
        </>
    );
}

export default Statistic;