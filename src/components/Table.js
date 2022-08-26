import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import "./table.css"

function Table() {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetchData().then((fetchedData) => {
            setData(fetchedData);
            console.log(fetchedData);
        })
    }, []);

    return (
        <div className="tableWrapper">
            <table className="leaderTable">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Username</th>
                        <th>Rank</th>
                        <th>Money</th>
                        <th>Daily Diff</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? [...data?.score?.topUsers, ...data?.score?.users].map(
                        (item, index) => <tr key={index}>
                            <td>{item.country}</td>
                            <td>{item.name}</td>
                            <td>{item.rank + 1}</td>
                            <td>{item.score}</td>
                            <td className={item.rank - item.oldRank > 0 ? "positive" : item.rank - item.oldRank === 0 ? "neutral" : "negative"}>{item.rank - item.oldRank}</td>
                        </tr>) : <></>}
                </tbody>
            </table>
        </div>
    );
}

export default Table;