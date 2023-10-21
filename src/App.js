import { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TableList from "./components/Table/TableList";
import styles from "./App.module.css";

const initialInvestment = [];

function App() {
    const [investments, setInvestment] = useState(initialInvestment);
    const calculateInvestment = (investment) => {
        setInvestment(() => {
            const newInvestment = [...investment];
            console.log(newInvestment);
            return newInvestment;

        });
    };

    return (
        <div className={styles.main}>
            <Header />
            <Form onCalculate = {calculateInvestment}/>
            <TableList tableData = {investments}/>
        </div>
    );
}

export default App;
