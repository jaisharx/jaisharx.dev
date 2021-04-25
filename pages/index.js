import NextHead from 'next/head';

import Header from 'components/header';
import Navbar from 'components/navbar';
import Projects from 'components/projects';
import Footer from 'components/footer';

export default function Homepage() {
    return (
        <>
            <NextHead>
                <title>Jai Sharma | Portfolio</title>
                <link rel="icon" href="logo.png"></link>
            </NextHead>

            <Navbar />
            <Header />
            <Projects />
            <Footer/>
        </>
    );
}
