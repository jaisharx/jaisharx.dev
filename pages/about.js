import Head from 'next/head';
import Navbar from '../components/navbar';
import Signature from '../components/signature';
import styles from '../styles/about.module.scss';
import { Fade } from 'react-awesome-reveal';

function About() {
    return (
        <>
            <Head>
                <title>jaisharx.dev | About</title>
            </Head>
            <Navbar active="about" isBack="true" />
            <Fade top>
                <div className={styles.container}>
                    <h1>holà</h1>
                    <main className={styles.main}>
                        <section>
                            Hey, there! Nice to have you around. You're on my personal website right
                            now. I build this as an onespot online collection for all my thoughts
                            and projects. Like a diary that I could maintain for myself and others
                            who're interested in the same.
                        </section>
                        <section>
                            <p>
                                I'm a self motivated software engineer from New Delhi , India. I’m
                                currently pursuing my computer applications degree. I’ve been
                                tinkering around with many different tech stacks and am flexible to
                                adapt to whatever’s in need. But core to my skills are modern web
                                technologies like{' '}
                                <a
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Reactjs
                                </a>
                                ,{' '}
                                <a
                                    href="https://nodejs.org/en/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nodejs
                                </a>
                                ,{' '}
                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Typescript
                                </a>
                                ,{' '}
                                <a
                                    href="https://firebase.google.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Firebase
                                </a>
                                ,{' '}
                                <a
                                    href="https://git-scm.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Git
                                </a>{' '}
                                and many others similar tools.
                            </p>
                        </section>
                        <section>
                            You can checkout my github profile{' '}
                            <a
                                href="https://github.com/jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            . I write many different apps/projects with the latest and greatest
                            technologies like javascript, typescript, graphql, css3, docker, and
                            many more. Being able to write bunch of instructions and make dumb
                            computers do the heavy-lifting for you is similar to a superpower in
                            modern world. Just like{' '}
                            <a href="https://nav.al/rich" target="_blank" rel="noopener noreferrer">
                                naval ravikant
                            </a>{' '}
                            talks about how code and media are the new leverage of the modern world.
                            Go ahead and checkout more of this website.
                            <p>Happy Learning!</p>
                        </section>
                    </main>
                    <div className={styles.signContainer}>
                        <Signature />
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default About;
