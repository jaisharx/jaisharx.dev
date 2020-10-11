import styles from './header.module.scss';

function index() {
    return (
        <>
            <h1 className={styles.heading}>Hi, there</h1>
            <h2 className={styles.subheading}>
                I'm Jai-Sharma
                <small>
                    {' '}
                    tweet to me @
                    <a href="https://twitter.com/jaisharx" target="_blank" rel="noopener noreferrer">
                        jaisharx
                    </a>
                </small>
            </h2>
        </>
    );
}

export default index;
