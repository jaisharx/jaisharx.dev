import styles from './style.module.scss';
import Link from 'next/link';
import TimeStamp from '../timestamp';

function List({ title, items }) {
    return (
        <div className={styles.container}>
            <h2>Latest {title}</h2>

            <ul className={styles.list}>
                {items.map((item) => (
                    <li key={item._id}>
                        <TimeStamp createAt={item.createdAt} />
                        <Link href={`${title.toLowerCase()}/${item.slug}`}>
                            <a className={styles.left}>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
