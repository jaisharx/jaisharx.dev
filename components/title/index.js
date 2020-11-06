import React from 'react';
import TextLoop from 'react-text-loop';
import Image from 'next/image';
import TechNames from './titlesList';
import styles from './style.module.scss';

function Title() {
    function createList() {
        const list = [];
        TechNames.forEach((name) => {
            list.push();
        });

        return list;
    }

    return (
        <div className={styles.container}>
            <TextLoop interval="2200">
                <div className={styles.text}>
                    <p>I use Javascript</p>
                    <Image
                        width="30"
                        height="30"
                        alt="Icon"
                        loading="eager"
                        priority="true"
                        src="/icons/javascript.svg"
                    />
                </div>
                <div className={styles.text}>
                    <p>I use Typescript</p>
                    <Image
                        width="30"
                        height="30"
                        alt="Icon"
                        loading="eager"
                        priority="true"
                        src="/icons/typescript.svg"
                    />
                </div>
                <div className={styles.text}>
                    <p>I use GraphQL</p>
                    <Image
                        width="30"
                        height="30"
                        alt="Icon"
                        loading="eager"
                        priority="true"
                        src="/icons/graphql.svg"
                    />
                </div>
                <div className={styles.text}>
                    <p>I use Docker</p>
                    <Image
                        width="30"
                        height="30"
                        alt="Icon"
                        loading="eager"
                        priority="true"
                        src="/icons/docker.svg"
                    />
                </div>
            </TextLoop>
        </div>
    );
}

export default Title;
