import React, { Component } from 'react';
import UserBox from './UserBox';
import styles from './index.module.scss';

export default class Header extends Component {
    render () {
        return (
            <div className={styles.Header}>
                <div className={styles.logo}></div>
                <div className={styles.title}>大数据部署平台</div>
                <div className={styles.userBoxWrap}>
                    <UserBox />
                </div>
            </div>
        );
    }
}
