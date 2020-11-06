import styles from '../../styles/items.module.scss';
import Navbar from '../../components/navbar';
import TimeStamp from '../../components/timestamp';
import Footer from '../../components/footer';
import Helmet from '../../components/helmet';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function Blogs({ blogs }) {
    return (
        <>
            <Helmet title="Blogs" description="Find amazing blogs and content here." />

            <header>
                <Navbar active="blogs" isBack="true" />
                <Fade top>
                    <main className={styles.container}>
                        <ul>
                            {blogs.map((blog) => (
                                <li key={blog._id}>
                                    <TimeStamp createAt={blog.createdAt} />
                                    <Link href={`/blogs/${blog.slug}`}>
                                        <a className={styles.left}>{blog.title}</a>
                                    </Link>
                                    <p>{blog.desc}</p>
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
    const res = await fetch(`https://strapi-cms-backend.herokuapp.com/blogs`);
    const blogs = await res.json();

    return {
        props: {
            blogs,
        },
        revalidate: 10,
    };
}

export default Blogs;
