import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';
import Date from '../../components/date';
import Footer from '../../components/footer';
import Head from 'next/head';
import Link from 'next/link';

function index({ blogs }) {
    return (
        <>
            <Head>
                <title>jaisharx.dev | Blogs</title>
            </Head>
            <header>
                <Navbar active="blogs" isBack="true" />
                <main className={styles.container}>
                    <ul>
                        {blogs.map((blog) => (
                            <li key={blog._id}>
                                <Date date={blog.createdAt} />
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className={styles.left}>{blog.title}</a>
                                </Link>
                                <p>{blog.content.slice(0, 200)}</p>
                            </li>
                        ))}
                    </ul>
                </main>
            </header>
            <Footer />
        </>
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
