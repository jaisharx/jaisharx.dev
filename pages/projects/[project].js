import styles from '../../styles/eachpage.module.scss';
import Navbar from '../../components/navbar';
import Blog from '../../components/blog';

function project({ project }) {
    console.log(project);
    return (
        <>
            <header>
                <Navbar isBack="true" active="projects" />
                <Blog content={project[0].desc} />
            </header>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://strapi-cms-backend.herokuapp.com/projects');
    const projects = await res.json();

    const paths = projects.map((project) => ({
        params: { project: project.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `https://strapi-cms-backend.herokuapp.com/projects?slug=${params.project}`
    );
    const project = await res.json();

    return {
        props: {
            project,
        },
        revalidate: 10,
    };
}

export default project;
