/**
 * Created by hjx on 8/21/2017.
 */
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import dateUtils from '../utils/dateUtils.js'

const pane = (props) => <div>{props.helloworld}</div>

pane.propTypes = {
    helloworld: React.PropTypes.string
}

const Pane = pane({ helloworld: '你好，世界！ pane' })

class PaneWrapper extends Component {
    render() {
        //return <pane helloworld='你好，时间'/>
        return <div><Pane /></div>
    }
}

class Banner extends Component {
    render() {
        return <div>'你好，世界 banner'</div>
    }
}

export default PaneWrapper

//export default connect(
//    (state) => {},
//    (dispatch) => {}
//)(PaneWrapper)

//export default connect(
//    (state) => {},
//    (dispatch) => {}
//)(Pane({helloworld: '你好，世界'}))


class ClockDumb extends Component {
    render() {
        //return <pane helloworld='你好，时间'/>
        return <div>{this.props.timestamp}</div>
    }
}

class ClockSmart extends Component {

    constructor(props) {
        this.state = {
            timestamp: dateUtils.getTimeStamp()
        }
    }

    componentDidMount() {
        setTimeInt
    }

    render() {
        //return <pane helloworld='你好，时间'/>
        return <ClockDumb timestamp={this.state.timestamp}/>
    }
}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
