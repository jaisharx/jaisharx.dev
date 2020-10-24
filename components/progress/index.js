import { useState, useEffect, useRef } from 'react';
import styles from './progress.module.scss';

function index({ children }) {
    const [width, setWidth] = useState(0);

    const progressBarScroll = () => {
        const scrollY = window.scrollY / document.body.scrollHeight;
        setWidth(scrollY * 120);
    };

    useEffect(() => {
        window.addEventListener('scroll', progressBarScroll, true);
        return () => {
            window.removeEventListener('scroll', progressBarScroll);
        }
    }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: width + '%' }}></div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    );
}

export default index;
