import React, { useEffect, useState } from 'react';
import styles from './title.module.scss';

const titles = ['GraphQL', 'Typescript', 'Git', 'ReactJs'];

export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    render() {
        return (
            <div className={styles.title}>
                <p>I use {titles[this.state.index]} </p>
                <img
                    src={`/icons/${titles[this.state.index]}.svg`}
                    alt="GraphQL"
                />
            </div>
        );
    }
}
