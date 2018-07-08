import React, { PropTypes } from 'react'
import Header from '../base/header/index'
import Footer from '../base/footer/index'
import Content from './content/index'
import '../../../styles/common/css/base/reset.css'
import styles from './styles.css'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}
