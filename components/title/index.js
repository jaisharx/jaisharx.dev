import React from 'react';
import TextLoop from 'react-text-loop';
import styles from './style.module.scss';

import Javascript from './icons/javascript.svg';
import Typescript from './icons/typescript.svg';
import Git from './icons/git.svg';
import Node from './icons/node.svg';
import Reactjs from './icons/reactjs.svg';

const Icons = [Javascript, Typescript, Git, Node, Reactjs];

function Title() {
    function createList() {
        const list = [];
        Icons.forEach((Icon, index) => {
            list.push(
                <div className={styles.text} key={index}>
                    <p>I use {Icon.name.slice(3)}</p>
                    <Icon />
                </div>
            );
        });

        return list;
    }

    return (
        <div className={styles.container}>
            <TextLoop
                interval="2200"
                children={createList()}
                springConfig={{ stiffness: 280, damping: 18 }}
            />
        </div>
    );
}

export default Title;
