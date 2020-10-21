import Head from 'next/head';
import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';
import Title from '../components/title';
import List from '../components/list';
import Footer from '../components/footer';

function index({ blogs, projects }) {
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
            <section className={styles.section}>
                <List title="Blogs" items={blogs}/>
                <List title="Projects" items={projects} />
            </section>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const blogResponse = await fetch(
        'https://strapi-cms-backend.herokuapp.com/blogs'
    );
    const projectResponse = await fetch(
        'https://strapi-cms-backend.herokuapp.com/projects'
    );
    const blogs = await blogResponse.json();
    const projects = await projectResponse.json();

    return {
        props: {
            blogs,
            projects
        },
    };
}

export default index;
