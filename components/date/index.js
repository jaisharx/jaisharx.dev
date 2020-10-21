import styles from './date.module.scss';

function formatDate(date) {
    const monthsList = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    var d = new Date(date),
        month = monthsList[d.getMonth()],
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${month} ${day}, ${year}`;
}

function index({ date }) {
    return <time className={styles.date}>{formatDate(date)}</time>;
}

export default index;
