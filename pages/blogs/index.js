
function index({ blogs }) {
    return (
        <>
            {/* <Navbar />
            <div className={styles.mainContainer}>
                <Sidebar />
                <main className={styles.container}>
                    <ul className={styles.list}>
                        {blogs.map((blog) => (
                            <BlogItem
                                title={blog.title}
                                desc={blog.content.slice(0, 200)}
                                key={blog._id}
                            />
                        ))}
                    </ul>
                </main>
            </div> */}
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
