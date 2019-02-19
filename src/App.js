import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <div className={styles.headerBox}>
                    <Header />
                </div>
                <div className={styles.bodyBox}>

                </div>
            </div>
        );
    }
}

export default App;
