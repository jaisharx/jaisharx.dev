import styles from './blog.module.scss';

function index({ content }) {
    return (
        <main className={styles.container}>
            <h1>Blogs</h1>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </main>
    );
}

export default index;
