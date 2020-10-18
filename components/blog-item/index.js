import styles from './blogItem.module.scss';

function BlogItem({ title, desc }) {
    return (
        <li className={styles.list}>
            {title}
            <div>{desc}</div>
        </li>
    );
}

export default BlogItem;
