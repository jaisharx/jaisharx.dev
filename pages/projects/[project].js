import styles from '../../styles/eachpage.module.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Signature from '../../components/signature';
import PageData from '../../components/page-data';
import ProgressWrapper from '../../components/progress';
import Helmet from '../../components/helmet';

function Project({ project }) {
    return (
        <ProgressWrapper>
            <Helmet title={project[0].title} description={project[0].desc} />
            <header>
                <Navbar isBack="true" active="projects" />
            </header>
            <PageData data={project} />
            <div className={styles.signatureContainer}>
                <Signature />
            </div>
            <Footer />
        </ProgressWrapper>
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

export default Project;
