import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './style.module.scss';

import Javascript from './icons/javascript.svg';
import Typescript from './icons/typescript.svg';
import GraphQL from './icons/graphql.svg';
import Reactjs from './icons/reactjs.svg';
import Node from './icons/node.svg';
import Git from './icons/git.svg';
import Sass from './icons/sass.svg';
import Docker from './icons/docker.svg';
import Firebase from './icons/firebase.svg';
import Nextjs from './icons/nextjs.svg';
import Gatsby from './icons/gatsby.svg';
import Powershell from './icons/powershell.svg';
import Python from './icons/python.svg';
import CPP from './icons/cpp.svg';
import MongoDB from './icons/mongodb.svg';
import Nginx from './icons/Nginx.svg';
import Serverless from './icons/serverless.svg';
import Tailwind from './icons/tailwind.svg';
import Vim from './icons/vim.svg';

function Title() {
    return (
        <div className={styles.container}>
            <TextLoop>
                <div className={styles.text}>
                    <p>I use Javascript</p>
                    <Javascript />
                </div>
                <div className={styles.text}>
                    <p>I use Typescript</p>
                    <Typescript />
                </div>
                <div className={styles.text}>
                    <p>I use Reactjs</p>
                    <Reactjs />
                </div>
                <div className={styles.text}>
                    <p>I use Firebase</p>
                    <Firebase />
                </div>
                <div className={styles.text}>
                    <p>I use Nextjs</p>
                    <Nextjs />
                </div>
                <div className={styles.text}>
                    <p>I use Gatsbyjs</p>
                    <Gatsby />
                </div>
                <div className={styles.text}>
                    <p>I use GraphQL</p>
                    <GraphQL />
                </div>
                <div className={styles.text}>
                    <p>I use Docker</p>
                    <Docker />
                </div>
                <div className={styles.text}>
                    <p>I use Node</p>
                    <Node />
                </div>
                <div className={styles.text}>
                    <p>I use Git</p>
                    <Git />
                </div>
                <div className={styles.text}>
                    <p>I use SASS</p>
                    <Sass />
                </div>
                <div className={styles.text}>
                    <p>I use Powershell</p>
                    <Powershell />
                </div>
                <div className={styles.text}>
                    <p>I use Python</p>
                    <Python />
                </div>
                <div className={styles.text}>
                    <p>I use CPP</p>
                    <CPP />
                </div>
                <div className={styles.text}>
                    <p>I use MongoDB</p>
                    <MongoDB />
                </div>
                <div className={styles.text}>
                    <p>I use Nginx</p>
                    <Nginx />
                </div>
                <div className={styles.text}>
                    <p>I use Serverless</p>
                    <Serverless />
                </div>
                <div className={styles.text}>
                    <p>I use Tailwind</p>
                    <Tailwind />
                </div>
                <div className={styles.text}>
                    <p>I use Vim</p>
                    <Vim />
                </div>
            </TextLoop>
        </div>
    );
}

export default Title;
