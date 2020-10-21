import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function index({ projects }) {
    return (
        <header>
            <Navbar active="projects" isBack="true" />
            <main className={styles.container}>
                <ul>
                    {projects.map((project) => (
                        <li>
                            <time>{formatDate(project.createdAt)}</time>
                            <h1>{project.title}</h1>
                            <p>
                                {/* {project.content.slice(0, 200)} */}
                            </p>
                        </li>
                    ))}
                </ul>
            </main>
        </header>
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

export default index;
