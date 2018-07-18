import React, { PropTypes } from 'react'
import styles from './styles.css'
import moment from 'moment'

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { adviceList = [], noticeList = [] } = this.props
        return (
            <div className={styles['container']}>
                <div className={styles['banner-item']}>
                    <div className={styles['banner-item-title']}>
                        <span className={styles['title-icon']}> || </span>
                        お知らせ
                    </div>
                    <div>
                    { 
                        noticeList.map(item => {
                            return (
                                <div className={styles['banner-item-content']}>
                                    {`${moment(item.createTime).format('MM/DD')} ${item.content}`}
                                </div>
                            )
                        })
                    }
                    </div>

                </div>
                <div className={styles['banner-item']}>
                    <div className={styles['banner-item-title']}>
                        <span className={styles['title-icon']}> || </span>
                        最新情報
                    </div>
                    <div className={styles['banner-item-content']}>
                    {
                        adviceList.map(item => {
                            return <div className={styles['product']}>
                                <figcaption className={styles['product-img']}>
                                    <img src={item.imageUrl || ''} onError={
                                        (e)=>{
                                            e.target.src ='./static/img/defaultImg.png'
                                            e.onError = null
                                        }}/>
                                    <span>{moment(item.createTime).format('YYYY/MM/DD')}</span>
                                </figcaption>
                                <p className={styles['product-info']}>
                                    {item.content}
                                </p>
                            </div>
                        })
                    }
                        
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
Banner.propTypes = {
    adviceList: PropTypes.array,
    noticeList: PropTypes.array
}
