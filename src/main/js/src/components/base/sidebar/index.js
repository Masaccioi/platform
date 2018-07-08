import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['sidebar-item']}>
                    <div className={styles['sidebar-item-row']}>
                        <div className={styles['search-box']}>
                            <input />
                            <div className={styles['search-button']}>
                                <i className={styles['icon'] + ' ' + styles['icon-search']}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles['sidebar-item-row'] + ' ' + styles['buy-text']}>
                        <i className={styles['icon'] + ' ' + styles['icon-nav']}/>
                        買取依頼書
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                    <div className={styles['sidebar-item-row']}>
                        <i className={styles['icon'] + ' ' + styles['icon-twitter']}/>
                        <a className={styles['twitter-url']} href='https://twitter.com/sirorom_ichiban' target='_blank'>@sirorom_ichiban</a>
                    </div>
                    <div className={styles['sidebar-item-row']}>
                        <i className={styles['icon'] + ' ' + styles['icon-line']}/>
                        080-4002-5999
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                </div>
            </div>
        )
    }
}
