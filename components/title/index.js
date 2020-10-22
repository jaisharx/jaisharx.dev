import React, { useEffect, useState } from 'react';
import styles from './title.module.scss';
import titles from './titlesList';


function index() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (counter > titles.length - 2) return setCounter(0);
            setCounter(counter + 1);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, [counter]);

    return (
        <div className={styles.title}>
            <p>I use {titles[counter]}</p>
            <img src={`/icons/${titles[counter]}.svg`} alt="Icon" />
        </div>
    );
}

export default index;
