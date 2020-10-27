import styles from './style.module.scss';

function Footer() {
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
            with 💛 of Strapi & Next.js
            <small>© 2020</small>
        </footer>
    );
}

export default Footer;
