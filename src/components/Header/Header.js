import styles from './Header.module.css';
import logo from '../images/investment-crowdfunding-logo-design-new2.jpg'

const Header = () => {
    return (
        <div className={styles.main__header}>
            <img
                src={logo}
                alt="investment logo"
            />
            <h3>Investment Calculator</h3>
        </div>
    );
};

export default Header;