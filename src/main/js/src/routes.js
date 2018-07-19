import React from 'react'
import { IndexRoute, Route, Router, Link, Redirect } from 'react-router'
import authUtils from './utils/authUtils.js'
import dateUtils from './utils/dateUtils.js'
import IndexSmart from './containers/index.js'
import HomeSmart from './containers/home.js'

let Page404 = () => (<div><h1>FIXME FIXME 404 404</h1></div>)
let PageNodes = () => (<div><h1>PageNodes</h1></div>)

/* eslint-disable */
export default function getRoutes({ getState, dispatch }) {
    const requireLogin = (nextState, replaceState) => {
        let query = ''
        let queryMap = nextState.location.query && Object.keys(nextState.location.query) || []
        queryMap.map((action, index) => {
            query += `${index == 0 ? `?`:``}${action}=${nextState.location.query[action]}${index>=queryMap.length-1?``:`&`}`
        })

        function checkAuth(pathnanme) {
            let authInfo = authUtils.getAuth()
            let isExpires = dateUtils.returnDifferenceState(authInfo.expiresAt)
            if (!isExpires) {
                replaceState(null, '/login', {url:pathnanme})
            }
        }
        checkAuth(nextState.location.pathname+query)
    }

    return (
        <Route path='/' component={IndexSmart}>
            <IndexRoute component={HomeSmart}/>
            <Route path='home' component={HomeSmart} />
        </Route>
    )
}
/* eslint-enable */
