import styles from '../styles/contact.module.scss';
import Navbar from '../components/navbar';
import Head from 'next/head';

function contact() {
    return (
        <>
            <Head>
                <title>jaisharx.dev | Contact Me</title>
            </Head>
            <Navbar active="contact" isBack="true" />
            <div className={styles.container}>
                <ul>
                    <li>
                        <a
                            href="https://twitter.com/jaisharx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            01. Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/jaisharx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            02. Github
                        </a>
                    </li>
                    <li>
                        <a href="https://dev.to/jaisharx" target="_blank" rel="noopener noreferrer">
                            03. Dev.to
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://medium.com/@jaisharx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            04. Medium
                        </a>
                    </li>
                    <li>
                        <a href="">05. Good ol' Mail</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default contact;
