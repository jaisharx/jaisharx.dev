import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './style.module.scss';

function Title() {
    return (
        <div className={styles.container}>
            <TextLoop interval="2200">
                <div className={styles.text}>
                    <p>I use Javascript</p>
                    <img width="30" height="30" alt="Icon" src="/icons/javascript.svg" />
                </div>
                <div className={styles.text}>
                    <p>I use Typescript</p>
                    <img width="30" height="30" alt="Icon" src="/icons/typescript.svg" />
                </div>
                <div className={styles.text}>
                    <p>I use GraphQL</p>
                    <img width="30" height="30" alt="Icon" src="/icons/graphql.svg" />
                </div>
                <div className={styles.text}>
                    <p>I use Docker</p>
                    <img width="30" height="30" alt="Icon" src="/icons/docker.svg" />
                </div>
            </TextLoop>
        </div>
    );
}

export default Title;
