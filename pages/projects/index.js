import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';
import TimeStamp from '../../components/timestamp';
import Footer from '../../components/footer';
import Helmet from '../../components/helmet';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function Projects({ projects }) {
    return (
        <>
            <Helmet title="Projects" description="Find amazing Projects and Code here." />

            <header>
                <Navbar active="projects" isBack="true" />
                <Fade top>
                    <main className={styles.container}>
                        <ul>
                            {projects.map((project) => (
                                <li key={project._id}>
                                    <TimeStamp createAt={project.createdAt} />
                                    <Link href={`/projects/${project.slug}`}>
                                        <a className={styles.left}>{project.title}</a>
                                    </Link>
                                    <p>{project.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </main>
                </Fade>
            </header>
            <Footer />
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
