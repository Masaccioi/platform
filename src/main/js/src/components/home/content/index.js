import React, { PropTypes } from 'react'
import styles from './styles.css'
import Sidebar from '../../base/sidebar/index'
import Banner from '../../base/banner/index'
import Main from './main/index'

const PAGE = 1, PAGESIZE = 10
export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getAdvice({ page:PAGE, pageSize:PAGESIZE})
        this.props.getNotice({ page:PAGE, pageSize:PAGESIZE})
    }
    render() {
        console.log(this.props)
        return (
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <Sidebar />
                </div>
                <div className={styles['main']}>
                    <Main />
                </div>
                <div className={styles['banner']}>
                    <Banner {...this.props}/>
                </div>
            </div>
        )
    }
}

Content.propTypes = {
    getAdvice: PropTypes.func,
    getNotice: PropTypes.func,
    adviceList: PropTypes.array,
    noticeList: PropTypes.array
}
