import styles from './style.module.scss';
import Toolbar from '../toolbar';
import MarkdownView from 'react-showdown';

function PageData({ data }) {
    const blog = data[0];
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>{blog.title}</h1>
            <Toolbar />
            <MarkdownView
                className={styles.markdown}
                markdown={blog.content}
                options={{ tables: true, emoji: true }}
            />
        </main>
    );
}

export default PageData;
