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
                    <div className={styles['hot-product-image'] + ' ' + styles['hot']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['apple']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['docomo']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['soft']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['yahu']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['au']}></div>
                    <div className={styles['hot-product-image'] + ' ' + styles['sim']}></div>
                </div>
                <div className={styles['product-list']}>
                    
                </div>
            </div>
        )
    }
}
