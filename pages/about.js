import Helmet from '../components/helmet';
import Navbar from '../components/navbar';
import Signature from '../components/signature';
import styles from '../styles/about.module.scss';
import { Fade } from 'react-awesome-reveal';

function About() {
    return (
        <>
            <Helmet title="About" description="Learn more about me" />
            <Navbar active="about" isBack="true" />
            <Fade top>
                <div className={styles.container}>
                    <p className={styles.title}>नमस्ते</p>
                    <main className={styles.main}>
                        <section>
                            Hi, there! Nice to have you around. You're on my personal website right
                            now. I built this as an one-spot online collection for all my thoughts
                            and projects. Like a diary that I could maintain for myself and others
                            like me interested in the tech, philosophy, or future.
                        </section>
                        <section>
                            <p>
                                Little about me, I'm a self-motivated software engineer from{' '}
                                <a
                                    href="https://goo.gl/maps/hGX2ZTEAuCGypeZE6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    New Delhi, India
                                </a>
                                . Currently pursuing my computer applications degree. Huge fan of
                                soccer and believe in the motto of keeping yourself fit and strong.
                                You'll not only find tech-related stuff but also my fitness journey
                                here.
                            </p>
                        </section>
                        <section>
                            You can check out my GitHub profile{' '}
                            <a
                                href="https://github.com/jaisharx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            . I regularly build many different apps & projects with the latest and
                            greatest technologies like{' '}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Javascript
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
                                href="https://graphql.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GraphQL
                            </a>
                            ,{' '}
                            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                Nextjs
                            </a>
                            ,{' '}
                            <a
                                href="https://www.docker.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Docker
                            </a>
                            , and many more. Being able to write a bunch of instructions and make
                            the dumb computer do the heavy lifting for you is no less than a
                            superpower in the modern world (just like how naval ravikant talks about
                            code and media being the new leverage). Alright, enough intro, now go
                            ahead and check out more of this website.
                            <p className={styles.goodbye}>Happy Learning.</p>
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
