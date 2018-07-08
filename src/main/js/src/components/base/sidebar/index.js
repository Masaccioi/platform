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
                            <div className={styles['search-button']}></div>
                        </div>
                    </div>
                    <div className={styles['sidebar-item-row'] + ' ' + styles['buy-text']}>
                        買取依頼書
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                    <div className={styles['sidebar-item-row']}>
                    @sirorom_ichiban
                    </div>
                    <div className={styles['sidebar-item-row']}>
                    080-4002-5999
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                </div>
            </div>
        )
    }
}
