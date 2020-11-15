import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function Navbar({ active, isBack }) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.profile}>
                {isBack === 'true' ? (
                    <Link href="/">
                        <div className={styles.imageContainer}>
                            <img src="/assets/left.svg" alt="Back" />
                        </div>
                    </Link>
                ) : (
                    <div className={styles.profileImage}>
                        <img src="/assets/profile.jpg" alt="Home" />
                    </div>
                )}
            </div>
            <ul>
                <li>
                    <Link href="/blogs">
                        <a className={active === 'blogs' ? styles.active : ''}>blogs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className={active === 'projects' ? styles.active : ''}>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={active === 'about' ? styles.active : ''}>about</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className={active === 'contact' ? styles.active : ''}>contact Me</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
