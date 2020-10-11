import Link from 'next/link';
import styles from './navbar.module.scss';

function index() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <Link href="/blog">
                    <a>
                        <li>blog</li>
                    </a>
                </Link>
                
                <Link href="/projects">
                    <a>
                        <li>projects</li>
                    </a>
                </Link>

                <Link href="/resume">
                    <a>
                        <li>résumé</li>
                    </a>
                </Link>

                <Link href="/contact">
                    <a>
                        <li>contact Me</li>
                    </a>
                </Link>
            </ul>
        </nav>
    );
}

export default index;
