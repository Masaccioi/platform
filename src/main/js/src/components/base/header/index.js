import React, { PropTypes } from 'react'
import styles from './styles.css'
import Icon from 'antd/lib/icon'
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
                        <Icon type='link' />
                        <p><a href='tel:03-5958-5800' className={styles['link-text']}>03-5958-5800</a></p>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-mobile']}/>
                        <p><a href='tel:080-4605-1888' className={styles['link-text']}>080-4605-1888</a></p>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-time']}/>
                        <p>12:00 ~ 21:00 年中無休</p>
                    </div>
                    <div className={styles['header-info']}>
                        <i className={styles['icon'] + ' ' + styles['icon-email']}/>
                        <p><a href='mailto:service@sirorom-1.jp' className={styles['link-text']}>service@sirorom-1.jp</a></p>
                    </div>
                </div>
            </div>
            <div className={styles['navigation']}>
                <ul>
                    <li style={{color:'#bf0000'}}>ホーム</li>
                    <li>携帯</li>
                    <li>電気</li>
                    <li>⽇⽤品</li>
                    <li><a className={styles['link-text']} href='#/appraisal' target='_blank'>無料査定</a></li>
                    <li>店舗案内</li>
                </ul>
            </div>
            </div>
        )
    }
}
