import styles from '../styles/contact.module.scss';
import Link from 'next/link';

function contact() {
    return (
        <main className={styles.container}>
            <button className={styles.close}>
                <Link href="">X</Link>
            </button>
        </main>
    );
}

export default contact;
