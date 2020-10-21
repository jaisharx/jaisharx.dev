import styles from './navbar.module.scss';
import Link from 'next/link';

function index() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.profile}>
                <img src="/profile.png" alt="My Profile" />
            </div>
            <ul>
                <li>
                    <Link href="/blogs">
                        <a>blogs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        <a>résumé</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>contact Me</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default index;
