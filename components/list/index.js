import styles from './list.module.scss';
import Link from 'next/link';

function index({ title }) {
    return (
        <div className={styles.container}>
            <h2>Top {title}</h2>
            <ul className={styles.list}>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>How to do Auth?</a>
                    </Link>
                </li>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>Do you love docker too?</a>
                    </Link>
                </li>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>How to use styled-components?</a>
                    </Link>
                </li>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>Why you should not write your auth?</a>
                    </Link>
                </li>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>Move fast with javascript and typescript.</a>
                    </Link>
                </li>
                <li>
                    <div>20th september 2020</div>
                    <Link href="">
                        <a>Take control of your code.</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default index;
