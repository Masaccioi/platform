import React, { PropTypes } from 'react'
import styles from './styles.css'
import '../../../../static/libs/widgets.js'
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
                        <a className={styles['link-text']} href='http://sirorom-1.com/images/kaitori_form.pdf' target='_blank'>買取依頼書</a>
                    </div>
                    <div className={styles['sidebar-item-row'] + ' ' + styles['buy-text']}>
                        <i className={styles['icon'] + ' ' + styles['icon-message']}/>
                        <a className={styles['link-text']} href='#/appraisal' target='_blank'>無料査定</a>
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                    <div className={styles['sidebar-item-row']}>
                        <i className={styles['icon'] + ' ' + styles['icon-twitter']}/>
                        <a className={styles['link-text']} href='https://twitter.com/sirorom_ichiban' target='_blank'>@sirorom_ichiban</a>
                    </div>
                    <div className={styles['sidebar-item-row']}>
                        <i className={styles['icon'] + ' ' + styles['icon-line']}/>
                        080-4002-5999
                    </div>
                </div>
                <div className={styles['sidebar-item']}>
                    <div>
                        <a className='twitter-timeline' data-width='100%' data-tweet-limit='1' data-height='400' data-dnt='true' href='https://twitter.com/sirorom_ichiban?ref_src=twsrc%5Etfw'>Tweets by sirorom_ichiban</a>
                    </div>
                </div>
            </div>
        )
    }
}
