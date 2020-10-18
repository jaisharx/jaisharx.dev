import styles from './header.module.scss';

function index({ title }) {
    return (
        <>
            <h1 className={styles.heading}>Hi, there</h1>
            <h2 className={styles.subheading}>
                {title}
                <small>
                    {' '}
                    tweet to me @
                    <a
                        href="https://twitter.com/jaisharx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        jaisharx
                    </a>
                </small>
            </h2>
        </>
    );
}

export default index;
