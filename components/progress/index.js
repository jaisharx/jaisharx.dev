import { useState, useEffect } from 'react';
import styles from './style.module.scss';

function Progress({ children }) {
    const [width, setWidth] = useState(0);

    const progressBarScroll = () => {
        const amountScrolled = window.pageYOffset;
        const totaltHeight = document.body.clientHeight - window.innerHeight;

        const scrolledPercentage = (amountScrolled / totaltHeight) * 100;
        setWidth(scrolledPercentage);
    };

    useEffect(() => {
        window.addEventListener('scroll', progressBarScroll, true);
        return () => {
            window.removeEventListener('scroll', progressBarScroll);
        };
    }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.progressContainer}>
                    <div className={styles.progressBar} style={{ width: width + '%' }}></div>
                </div>
            </div>
            <div>{children}</div>
        </>
    );
}

export default Progress;
