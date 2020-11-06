import styles from '../../styles/eachpage.module.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Signature from '../../components/signature';
import PageData from '../../components/page-data';
import ProgressWrapper from '../../components/progress';
import Helmet from '../../components/helmet';

function Blog({ blog }) {
    return (
        <>
            <Helmet title={blog[0].title} description={blog[0].desc} />
            <ProgressWrapper>
                <header>
                    <Navbar isBack="true" active="blogs" />
                </header>
                <PageData data={blog} />
                <div className={styles.signatureContainer}>
                    <Signature />
                </div>
                <Footer />
            </ProgressWrapper>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://strapi-cms-backend.herokuapp.com/blogs');
    const blogs = await res.json();

    const paths = blogs.map((blog) => ({
        params: { blog: blog.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://strapi-cms-backend.herokuapp.com/blogs?slug=${params.blog}`);
    const blog = await res.json();

    return {
        props: {
            blog,
        },
        revalidate: 10,
    };
}

export default Blog;
