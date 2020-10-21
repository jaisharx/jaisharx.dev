import Head from 'next/head';
import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';
import List from '../components/list';

function index() {
    return (
        <>
            <Head>
                <title>jaisharx.dev</title>
            </Head>
            <header className={styles.container}>
                <Navbar />
                <main className={styles.main}>
                    <div>
                        <h1>jaisharx</h1>
                        <div className={styles.title}>
                            <p>I use GraphQL </p>
                            <img src="/icons/graphql.svg" alt="GraphQL" />
                        </div>
                    </div>
                </main>
            </header>
            <section>
                <List title="Blogs" />
                <List title="Projects" />
            </section>
            
        </>
    );
}

export default index;
