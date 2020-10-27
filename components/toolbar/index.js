import styles from './style.module.scss';

function Toolbar() {
    return (
        <div className={styles.container}>
            <img src="/profile.png" alt="Profile Image" />
            <div className={styles.title}>
                <div>Author</div>
                <p>jai sharma</p>
            </div>
            <div className={styles.time}>
                <img src="/assets/time.svg" alt="Time to read"/>
                <p>2 min</p>
            </div>
        </div>
    );
}

export default Toolbar;
