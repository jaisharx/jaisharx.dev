import styles from './list.module.scss';

function index({ title }) {
    return (
        <div className={styles.container}>
            <h2>Top {title}</h2>
            <ul className={styles.list}>
                <li><div>20th september 2020</div> How to do Auth?</li>
                <li><div>20th september 2020</div> Do you love docker too?</li>
                <li><div>20th september 2020</div> How to use styled-components?</li>
                <li><div>20th september 2020</div> Why you should not write your own auth!?</li>
                <li><div>20th september 2020</div> Move fast with javascript and typescript.</li>
                <li><div>20th september 2020</div> Take control of your code.</li>
            </ul>
        </div>
    )
}

export default index
