import React, { useEffect, useState } from 'react';
import styles from './title.module.scss';

function index() {
    // const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if (counter > titles.length - 2) return setCounter(0);
    //         setCounter(counter + 1);
    //     }, 2000);

    //     return () => {
    //         clearTimeout(timeout);
    //     };
    // }, [counter]);

    return (
        <div className={styles.contentSlider}>
            <div className={styles.slider}>
                <div className={styles.mask}>
                    <ul>
                        <li className={styles.anim1}>
                            <p>I use Javascript</p>
                            <img src="/icons/javascript.svg" alt="Icon" />
                        </li>
                        <li className={styles.anim2}>
                            <p>I use Typescript</p>
                            <img src="/icons/typescript.svg" alt="Icon" />
                        </li>
                        <li className={styles.anim3}>
                            <p>I use ReactJs</p>
                            <img src="/icons/reactjs.svg" alt="Icon" />
                        </li>
                        <li className={styles.anim4}>
                            <p>I use Docker</p>
                            <img src="/icons/docker.svg" alt="Icon" />
                        </li>
                        <li className={styles.anim5}>
                            <p>I use Vscode</p>
                            <img src="/icons/vscode.svg" alt="Icon" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default index;
