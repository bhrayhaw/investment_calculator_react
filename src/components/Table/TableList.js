import TableItem from "./TableItem";
import styles from "./TableList.module.css";

const TableList = (props) => {
    return (
        <table className={styles.main__table}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            {props.tableData.map((data) => (
                <TableItem
                    key={data.year}
                    year={data.year}
                    totalSavings={data.totalSavings}
                    interest={data.interest}
                    totalInterest={data.totalInterest}
                    investedCapital={data.investedCapital}
                />
            ))}
        </table>
    );
};

export default TableList;
