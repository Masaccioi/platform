import { Provider, connect } from 'react-redux'
import Appraisal from '../components/appraisal/index'
import * as home from '../actions/home.js'

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
)(Appraisal)
