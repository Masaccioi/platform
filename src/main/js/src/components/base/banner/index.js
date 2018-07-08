import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['banner-item']}>
                    <div className={styles['banner-item-title']}>
                        <span className={styles['title-icon']}> || </span>
                        お知らせ
                    </div>
                    <div className={styles['banner-item-content']}>
                        <p>7/2 熱い日にご来店のお客様は大変ですよねさて、本日限定！！</p>
                        <p>7/2 熱い日にご来店のお客様は大変ですよねさて、本日限定！！</p>
                        <p>7/2 熱い日にご来店のお客様は大変ですよねさて、本日限定！！</p>
                    </div>

                </div>
                <div className={styles['banner-item']}>
                    <div className={styles['banner-item-title']}>
                        <span className={styles['title-icon']}> || </span>
                        最新情報
                    </div>
                    <div className={styles['banner-item-content']}>
                        <div className={styles['product']}>
                            <figcaption className={styles['product-img']}>
                                <div className={styles['address-img']}/>
                                <span>7-12</span>
                            </figcaption>
                            <p className={styles['product-info']}>
                            xxxxxxxxx
                            </p>
                        </div>
                    </div>

                </div>
                <div className={styles['banner-item']}>
                    <div className={styles['banner-item-title']}>
                        <span className={styles['title-icon']}> || </span>
                        最新情報
                    </div>
                    <div className={styles['banner-item-content']}>
                        <div className={styles['address-img']}/>
                    </div>

                </div>
            </div>
        )
    }
}
