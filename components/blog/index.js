import styles from './blog.module.scss';
import MarkdownView from 'react-showdown';

function index({ data }) {
    const blog = data[0];
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{blog.title}</h1>
            <MarkdownView
                className={styles.markdown}
                markdown={blog.content}
                options={{ tables: true, emoji: true }}
            />
        </main>
    );
}

export default index;
