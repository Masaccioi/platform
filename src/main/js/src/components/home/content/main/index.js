import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['hot-product']}>
                    <div className={styles['product']}></div>
                    <div className={styles['product']}></div>
                    <div className={styles['product']}></div>
                    <div className={styles['product']}></div>
                    <div className={styles['product']}></div>
                </div>
            </div>
        )
    }
}
