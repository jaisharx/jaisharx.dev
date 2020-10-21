import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';

function index() {
    return (
        <>
            <header className={styles.container}>
                <Navbar />
                <main className={styles.main}>
                    <div>
                        <h1>jaisharx</h1>
                        <div className={styles.title}>
                            <p>I use GraphQL </p>
                            <img src="/icons/graphql.svg" alt="GraphQL" />
                        </div>
                    </div>
                </main>
            </header>
        </>
    );
}

export default index;
