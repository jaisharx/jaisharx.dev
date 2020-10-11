import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';

import styles from './sidebar.module.scss';

function index() {
    return (
        <div className={styles.sidebar}>
            <a href="https://github.com/jaisharx" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
            </a>
            <a href="mailto:sendtojsharma@gmail.com">
                <HiMail />
            </a>
            <a href="https://twitter.com/jaisharx" target="_blank" rel="noopener noreferrer">
                <AiOutlineTwitter />
            </a>
        </div>
    );
}

export default index;
