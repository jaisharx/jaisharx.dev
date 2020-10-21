import Head from 'next/head';
import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';
import Title from '../components/title';
import List from '../components/list';
import Footer from '../components/footer';

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
                        <Title />
                    </div>
                </main>
            </header>
            <section>
                <List title="Blogs" />
                <List title="Projects" />
            </section>
            <Footer />
        </>
    );
}

export default index;
