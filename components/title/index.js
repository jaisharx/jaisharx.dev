import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function Title() {
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

export default Title;
