import NextHead from 'next/head';

import Footer from 'components/footer';
import Header from 'components/header';
import Projects from 'components/projects';

export default function Homepage() {
    return (
        <>
            <NextHead>
                <title>Jai Sharma | Portfolio</title>
                <link rel="icon" href="/favicon.svg"></link>
            </NextHead>

            <Header />
            <Projects />
            <Footer/>
        </>
    );
}
