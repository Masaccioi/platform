import { Provider, connect } from 'react-redux'
import Appraisal from '../components/appraisal/index'
import * as appraisal from '../actions/appraisal'

function mapStateToProps(state) {
    return {
        setAppraisalFlag: state.appraisal.setAppraisalFlag
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAppraisal:  payload => dispatch(appraisal.setAppraisal(payload))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Appraisal)
