import styles from './blog.module.scss';
import MarkdownView from 'react-showdown';

function index({ content }) {
    return (
        <main className={styles.container}>
            <h1>Blogs</h1>
            <MarkdownView markdown={content} options={{ tables: true, emoji: true }} />
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </main>
    );
}

export default index;
