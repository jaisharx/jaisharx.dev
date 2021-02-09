import '../styles/globals.scss';
import Head from 'next/head';

// import firebase from '../firebase';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>jaisharx.dev</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
