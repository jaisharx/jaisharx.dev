import Helment from '../components/helmet';
import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';
import Title from '../components/title';
import List from '../components/list';
import Footer from '../components/footer';
import { Fade } from 'react-awesome-reveal';

function Index({ blogs, projects }) {
    return (
        <>
            <Helment />
            <header className={styles.container}>
                <Navbar />
                <Fade top>
                    <main className={styles.main}>
                        <div>
                            <h1>jaisharx</h1>
                            <Title />
                        </div>
                    </main>
                </Fade>
            </header>
            <section className={styles.section}>
                <List title="Blogs" items={blogs} />
                <List title="Projects" items={projects} />
            </section>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const blogResponse = await fetch('https://strapi-cms-backend.herokuapp.com/blogs?_limit=5');
    const projectResponse = await fetch(
        'https://strapi-cms-backend.herokuapp.com/projects?_limit=5'
    );
    const blogs = await blogResponse.json();
    const projects = await projectResponse.json();

    return {
        props: {
            blogs,
            projects,
        },
        revalidate: 10,
    };
}

export default Index;
