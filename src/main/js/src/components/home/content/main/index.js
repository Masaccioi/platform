import React, { PropTypes } from 'react'
import styles from './styles.css'
import autobind from '../../../../utils/autobind'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getHotProduct()
        this.props.getOperator()
    }
    @autobind
    onClickOperator(id) {
        id && this.props.getMainProduct(id)
    }
    @autobind
    onClickHotProduct() {
        this.props.getHotProduct()
    }
    render() {
        const { hotProductList = [], operator = [] } = this.props
        return (
            <div className={styles['container']}>
                <div className={styles['hot-product']}>
                    <div className={styles['hot-product-image']}
                    onClick={this.onClickHotProduct}>
                        <img src='./static/img/hot.png'/>
                    </div>
                    {
                        operator.map(item => {
                            return (
                                <div className={styles['hot-product-image']} key={item.id}
                                onClick={this.onClickOperator.bindArgs(item.id)}>
                                    <img src={item.iconUrl}/>
                                </div>
                            )
                        })
                    }
                </div>
                <table className={styles['product-list']}>
                    <thead>
                        <tr>
                            <th width='30%'>機種名</th>
                            <th width='30%'></th>
                            <th width='20%'>新品・価格</th>
                            <th width='20%'>中古・価格</th>
                        </tr>
                    </thead>
                </table>

                        {
                            hotProductList.map(product => {
                                const { productList = [] } = product
                                const result = productList.map(item => {
                                    return (
                                        <tr>
                                            <td width='30%'>{item.productName}</td>
                                            <td width='30%'>{item.remark}</td>
                                            <td width='20%'>{item.newPrice}</td>
                                            <td width='20%'>{item.oldPrice}</td>
                                        </tr>
                                    )
                                })
                                return (       
                                    <table className={styles['product-list']}>
                                        <tr>
                                            <td colSpan='4' className={styles['product-type']}>
                                                {product.className}
                                            </td>
                                        </tr>
                                        {result}
                                    </table>
                                )
                            })
                        }
            </div>
        )
    }
}
Main.propTypes = {
    getHotProduct: PropTypes.func,
    hotProductList: PropTypes.array,
    operator: PropTypes.array,
    getOperator: PropTypes.func,
    getMainProduct: PropTypes.func
}
