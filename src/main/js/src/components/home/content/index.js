import React, { PropTypes } from 'react'
import styles from './styles.css'
import Sidebar from '../../base/sidebar/index'
import Banner from '../../base/banner/index'
import Main from './main/index'
export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <Sidebar/>
                </div>
                <div className={styles['main']}>
                    <Main />
                </div>
                <div className={styles['banner']}>
                    <Banner />
                </div>
            </div>
        )
    }
}
