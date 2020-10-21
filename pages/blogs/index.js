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

function index({ blogs }) {
    return (
        <header>
            <Navbar active="blogs" isBack="true" />
            <main className={styles.container}>
                <ul>
                    {blogs.map((blog) => (
                        <li key={blog._id}>
                            <time>{formatDate(blog.createdAt)}</time>
                            <h1>{blog.title}</h1>
                            <p>
                                {blog.content.slice(0, 200)}
                            </p>
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
