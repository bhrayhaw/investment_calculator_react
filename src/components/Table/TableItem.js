import "./TableItem.module.css"

const TableItem = (props) => {
    return (
        <tbody>
            <tr>
                <td>{props.year}</td>
                <td>{props.totalSavings}</td>
                <td>{props.interest}</td>
                <td>{props.totalInterest}</td>
                <td>{props.investedCapital}</td>
            </tr>
        </tbody>
    );
};

export default TableItem;