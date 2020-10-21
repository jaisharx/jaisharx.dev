import styles from './footer.module.scss';

function index() {
    return (
        <footer className={styles.footer}>
            Made by{' '}
            <a
                href="https://twitter.com/jaisharx"
                target="_blank"
                rel="noopener noreferrer"
            >
                @jaisharx
            </a>{' '}
            with 💛 of Next.js
            <small>© 2020</small>
        </footer>
    );
}

export default index;
