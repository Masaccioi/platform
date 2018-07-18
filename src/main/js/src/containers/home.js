import { Provider, connect } from 'react-redux'
import Home from '../components/home/index'
import * as home from '../actions/home.js'

function mapStateToProps(state) {
    return {
        adviceList: state.home.adviceList,
        noticeList: state.home.noticeList,
        hotProductList: state.home.hotProductList,
        operator: state.home.operator
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAdvice: payload => dispatch(home.getAdvice(payload)),
        getNotice: payload => dispatch(home.getNotice(payload)),
        getHotProduct: payload => dispatch(home.getHotProduct(payload)),
        getOperator:  payload => dispatch(home.getOperator(payload)),
        getMainProduct:  payload => dispatch(home.getMainProduct(payload))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
