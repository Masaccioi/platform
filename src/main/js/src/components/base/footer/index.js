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
                    <div className={styles['flex-item']}></div>
                    <div className={styles['flex-item']}>
                        <p>株式会社エス・エル・リサーチ</p>
                        <p>〒170-0013</p>
                        <p>東京都豊島区東池袋1-42-14 28山京ビル 501B</p>
                        <p>Tel 03-5952-5800 Mobile 080-4605-1888</p>
                        <p>12：00～21：00 年中無休</p>
                    </div>
                    <div className={styles['flex-item']}>
                        <p>買取までの流れ</p>
                        <p>携帯電話買取</p>
                        <p>電気買取</p>
                        <p>⽇⽤品買取</p>
                    </div>
                    <div className={styles['flex-item']}>
                        <p>買取依頼書</p>
                        <p>白ロムとは</p>
                        <p>店舗のご案内</p>
                        <p>プライバシーポリシー</p>
                    </div>
                </div>
                <div className={styles['copyright']}></div>
            </div>
        )
    }
}
