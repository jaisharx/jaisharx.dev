import styles from '../styles/index.module.scss';

import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Signature from '../components/signature';

function index() {
    return (
        <>
            <Navbar />
            <div className={styles.mainContainer}>
                <Sidebar />
                <main className={styles.container}>
                    <Header title="I'm Jai-Sharma"/>
                    <section className={styles.start}>
                        I’m an avid learner and software engineer. I love taking on unknown tasks and letting the
                        curiosity lead. I casually build websites with different modern stacks for some personal project
                        or not-so-personal projects. I absolutely love programming allows for someone to achieve.
                    </section>
                    <section className={styles.mainSection}>
                        <p>
                            I'm a self motivated software engineer from
                            <a href="https://goo.gl/maps/EnVM6sxneq6D7gU4A"> New Delhi, India</a>. I’m currently in my
                            3rd semester in the computer applications degree. I’ve been tinkering around with many
                            different tech stack and am flexible to adapt to whatever’s in need. But core to my skills
                            are modern web technologies like Reactjs, Nodejs, Typescript, Firebase, Git, and many others
                            similar tools.
                        </p>
                        I've three rules before taking any projects:
                        <ul>
                            <li>To write code that has as little as technical debt to it</li>
                            <li>Never forget putting helpful comments for future references</li>
                            <li>And at last don’t over-promise and under-deliver</li>
                        </ul>
                    </section>
                    <section className={styles.end}>
                        <strong>what kind of job I'm looking for?!</strong> My ideal job would be to deal around in tech and handle
                        tasks, make teams, use the team to their fullest, and much more. As there is a paradigm-shift in
                        the types of jobs available, I do not wish to work as a software developer over a mundane desk
                        for 9-5 hrs for five days a week, rather a much more dynamic job that challenges my core skills
                        as well as my soft skills to the fullest everyday, pushing me and the product I'm working on to
                        new limits everytime :)
                    </section>
                    <Signature />
                </main>
            </div>
        </>
    );
}

export default index;
