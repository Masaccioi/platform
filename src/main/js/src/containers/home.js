import { Provider, connect } from 'react-redux'
import Home from '../components/home/index'
// import * as example from '../actions/example.js'

function mapStateToProps(state) {
    return {
        // examples: state[curLang].examples
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // switchLanguage: () => dispatch(i18.switchLanguage()),
        // getExamples: () => dispatch(example.getExamples())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home)
