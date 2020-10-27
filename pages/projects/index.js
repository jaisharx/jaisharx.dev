import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';
import Date from '../../components/date';
import Footer from '../../components/footer';
import Head from 'next/head';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function Projects({ projects }) {
    return (
        <>
            <Head>
                <title>jaisharx.dev | Projects</title>
            </Head>
            <Fade top>
                <header>
                    <Navbar active="projects" isBack="true" />
                    <main className={styles.container}>
                        <ul>
                            {projects.map((project) => (
                                <li key={project._id}>
                                    <Date date={project.createdAt} />
                                    <Link href={`/projects/${project.slug}`}>
                                        <a className={styles.left}>{project.title}</a>
                                    </Link>
                                    <p>{project.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </main>
                </header>
                <Footer />
            </Fade>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://strapi-cms-backend.herokuapp.com/projects`);
    const projects = await res.json();

    return {
        props: {
            projects,
        },
        revalidate: 10,
    };
}

export default Projects;
