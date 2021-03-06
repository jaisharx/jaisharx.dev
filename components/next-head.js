import Head from 'next/head';

export default function NextHead({ title, desc }) {
    return (
        <Head>
            {/* <!-- primary meta tags --> */}
            <title>{title}</title>
            <link rel="icon" href="/favicon.svg"></link>

            {/* meta content */}
            <meta name="title" content={title} />
            <meta name="description" content={desc} />

            {/* <!-- open graph --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://jaisharma.dev/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:image" content="http://jaisharma.dev/homepage.png" />

            {/* <!-- twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://jaisharma.dev/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={desc} />
            <meta property="twitter:image" content="http://jaisharma.dev/homepage.png"></meta>
        </Head>
    );
}
