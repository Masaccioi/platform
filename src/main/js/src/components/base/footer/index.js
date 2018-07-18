import React, { PropTypes } from 'react'
import styles from './styles.css'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={styles['container']}>
                <div className={styles['content']}>
                    <div className={styles['flex-item']+ ' ' + styles['footer-map']}>
                        <span className={styles['map-title']}>白ロム一番</span>
                        <a  className={styles['map-img']}
                            target='_blank' 
                            href='https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%92170-0013+T%C5%8Dky%C5%8D-to,+Toshima-ku,+Higashiikebukuro,+1+Chome%E2%88%9242%E2%88%9214+%EF%BC%92%EF%BC%98%E5%B1%B1%E4%BA%AC%E3%83%93%E3%83%AB/@35.732478,139.713197,15z/data=!4m5!3m4!1s0x60188d673dd982c1:0x1033be7c3b2ccec8!8m2!3d35.7324776!4d139.7131973?hl=zh-CN'>
                            <img src='./static/img/map.png'/>
                        </a>
                    </div>
                    <div className={styles['flex-address'] + ' ' + styles['footer-info']}>
                        <p>株式会社エス・エル・リサーチ</p>
                        <p>〒170-0013</p>
                        <p>東京都豊島区東池袋1-42-14 28山京ビル 501B</p>
                        <p>Tel 03-5952-5800 Mobile 080-4605-1888</p>
                        <p>12：00～21：00 年中無休</p>
                    </div>
                    <div className={styles['flex-item'] + ' ' + styles['footer-info']}>
                        <p>買取までの流れ</p>
                        <p>携帯電話買取</p>
                        <p>電気買取</p>
                        <p>⽇⽤品買取</p>
                    </div>
                    <div className={styles['flex-item'] + ' ' + styles['footer-info']}>
                        <p>買取依頼書</p>
                        <p>無料査定</p>
                        <p>白ロムとは</p>
                        <p>店舗のご案内</p>
                        <p>プライバシーポリシー</p>
                    </div>
                </div>
                <div className={styles['copyright']}>
                    <p>東京都公安委員会　第305520708731号</p>
                    <p>Copyright(C) 2008-2018 sirorom-1 All Rights Reserved.</p>
                </div>
            </div>
        )
    }
}
