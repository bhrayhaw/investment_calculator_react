import styles from "./Button.module.css";

const Button = () => {
    return (
        <div className={styles["form-controls__btn"]}>
            <button type="reset">Reset</button>
            <button type="submit">
                Calculate
            </button>
        </div>
    );
};

export default Button;
