import React from 'react';
import TextLoop from 'react-text-loop';
import TechNames from './titlesList';
import styles from './style.module.scss';

function Title() {
    function createList() {
        const list = [];
        TechNames.forEach((name) => {
            list.push(
                <div className={styles.text}>
                    <p>I use {name}</p>
                    <img
                        width="30"
                        height="30"
                        alt="Icon"
                        src={`/icons/${name.toLowerCase()}.svg`}
                    />
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
