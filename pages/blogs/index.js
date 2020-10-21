import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';
import Date from '../../components/date';

function index({ blogs }) {
    return (
        <header>
            <Navbar active="blogs" isBack="true" />
            <main className={styles.container}>
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog._id}>
                            <Date date={blog.createdAt}/>
                            <h1 className={styles.left}>{blog.title}</h1>
                            <p>{blog.content.slice(0, 200)}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </header>
    );
}

export async function getStaticProps() {
    const res = await fetch(`https://strapi-cms-backend.herokuapp.com/blogs`);
    const blogs = await res.json();

    return {
        props: {
            blogs,
        },
        revalidate: 10,
    };
}

export default index;
