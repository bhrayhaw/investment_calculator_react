import { useState } from "react";

import styles from "./Form.module.css";
import Button from "../Button/Button";

const Form = (props) => {
    const [enteredSavings, setSavings] = useState("");
    const [enteredYearlySavings, setYearlySavings] = useState("");
    const [enteredExpectedInterest, setExpectedInterest] = useState("");
    const [enteredInvestmentDuration, setInvestmentDuration] = useState("");
    const [isValid, setIsValid] = useState(true);

    const currentSavingsHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setSavings(event.target.value);
    };

    const yearlySavingsHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setYearlySavings(event.target.value);
    };

    const expectedInterestHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setExpectedInterest(event.target.value);
    };

    const investmentDurationHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setInvestmentDuration(event.target.value);
    };

    let totalSavings = parseFloat(enteredSavings);
    let totalInterest = 0
    const newData = [];

    for (let i = 0; i <= parseInt(enteredInvestmentDuration); i++) {
        const yearlyInterest =
            (totalSavings + parseFloat(enteredYearlySavings)) *
            (parseFloat(enteredExpectedInterest) / 100);
        totalSavings += parseFloat(enteredYearlySavings) + yearlyInterest;
        totalInterest += yearlyInterest;

        newData.push({
            year: i + 1,
            totalSavings: totalSavings.toFixed(2),
            interest: yearlyInterest.toFixed(2),
            totalInterest: totalInterest.toFixed(2),
            investedCapital: (totalSavings - totalInterest).toFixed(2),
        });
    }

    const CalculateInvestmentHandler = (event) => {
        event.preventDefault();
        if (enteredSavings.trim().length === 0) {
            setIsValid(false);
            return;
        } else if (enteredYearlySavings.trim().length === 0) {
            setIsValid(false);
            return;
        } else if (enteredExpectedInterest.trim().length === 0) {
            setIsValid(false);
            return;
        } else if (enteredInvestmentDuration.trim().length === 0) {
            setIsValid(false);
            return;
        }
        setSavings("");
        setYearlySavings("");
        setExpectedInterest("");
        setInvestmentDuration("");
        props.onCalculate(newData);
    };
    return (
        // form for the investment calculator
        <form
            className={styles["main__form-controls"]}
            onSubmit={CalculateInvestmentHandler}
        >
            <div className={styles["form-controls__input"]}>
                <div>
                    <label
                        className={`${styles["form-controls__input label"]}  ${
                            !isValid && styles.invalid
                        }`}
                    >
                        Current Savings ($)
                    </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredSavings}
                        onChange={currentSavingsHandler}
                    />
                </div>
                <div>
                    <label
                        className={`${styles["form-controls__input label"]}  ${
                            !isValid && styles.invalid
                        }`}
                    >
                        Yearly Savings ($)
                    </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredYearlySavings}
                        onChange={yearlySavingsHandler}
                    />
                </div>
            </div>
            <div className={styles["form-controls__input"]}>
                <div>
                    <label
                        className={`${styles["form-controls__input label"]}  ${
                            !isValid && styles.invalid
                        }`}
                    >
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredExpectedInterest}
                        onChange={expectedInterestHandler}
                    />
                </div>
                <div>
                    <label
                        className={`${styles["form-controls__input label"]}  ${
                            !isValid && styles.invalid
                        }`}
                    >
                        Investment Duration (Years)
                    </label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={enteredInvestmentDuration}
                        onChange={investmentDurationHandler}
                    />
                </div>
            </div>
            <Button />
        </form>
    );
};

export default Form;
