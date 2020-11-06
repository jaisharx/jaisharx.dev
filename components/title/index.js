import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './style.module.scss';

import Javascript from './icons/javascript.svg';
import Typescript from './icons/typescript.svg';
import Git from './icons/git.svg';
import Node from './icons/node.svg';
import Reactjs from './icons/reactjs.svg';
import Sass from './icons/sass.svg';
import Babel from './icons/babel.svg';
import Docker from './icons/docker.svg';

function Title() {
    return (
        <div className={styles.container}>
            <TextLoop interval="2200">
                <div className={styles.text}>
                    <p>I use Javascript</p>
                    <Javascript />
                </div>
                <div className={styles.text}>
                    <p>I use Typescript</p>
                    <Typescript />
                </div>
                <div className={styles.text}>
                    <p>I Git</p>
                    <Git />
                </div>
                <div className={styles.text}>
                    <p>I use Node</p>
                    <Node />
                </div>
                <div className={styles.text}>
                    <p>I use Reactjs</p>
                    <Reactjs />
                </div>
                <div className={styles.text}>
                    <p>I use SASS</p>
                    <Sass />
                </div>
                <div className={styles.text}>
                    <p>I use Babel</p>
                    <Babel />
                </div>
                <div className={styles.text}>
                    <p>I use Docker</p>
                    <Docker />
                </div>
            </TextLoop>
        </div>
    );
}

export default Title;
