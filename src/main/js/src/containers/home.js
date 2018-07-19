/**
 * Created by hjx on 7/27/2017.
 */
import { Provider, connect } from 'react-redux'
import Home from '../components/home/index'
import * as i18 from '../actions/i18n.js'

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
