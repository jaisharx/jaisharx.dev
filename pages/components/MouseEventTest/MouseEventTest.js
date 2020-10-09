import React, { useState } from 'react'
import styles from './MouseEventTest.module.scss';

const MouseEventTest = () => {
    const [xCor, setxCor] = useState(0);
    const [yCor, setyCor] = useState(0);

    const handleMouseMove = (e) => {
        setxCor(e.clientX);
        setyCor(e.clientY);
    };

    return (
        <div className={styles.MouseEventTest} onMouseMove={handleMouseMove}>
            {xCor || yCor
                ? 'The mouse is at x: ' + xCor + ', y: ' + yCor
                : 'Move the mouse over this box'}
        </div>
    );
};

export default MouseEventTest;
