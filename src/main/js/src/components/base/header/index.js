import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
            <div className={styles['header']}>
                <div className={styles['header-logo']} />
                <div className={styles['header-info-box']}>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-phone']}/>
                        <span>03-5958-5800</span>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-mobile']}/>
                        <span>080-4605-1888</span>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-time']}/>
                        <span>12:00 ~ 21:00 年中無休</span>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-email']}/>
                        <span>service@sirorom-1.jp</span>
                    </div>
                </div>
            </div>
            <div className={styles['navigation']}>
                <ul>
                    <li>ホーム</li>
                    <li>携帯</li>
                    <li>電気</li>
                    <li>⽇⽤品</li>
                    <li>店舗案内</li>
                </ul>
            </div>
            </div>
        )
    }
}
