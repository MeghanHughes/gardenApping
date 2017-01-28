const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { MuiThemeProvider } = require('material-ui/styles')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducer')
const initialState = require(../state)
const request = require('superagent')

// components
const App = require('./components/app')
const Zones = require('./components/zones')

store.subscribe(()=> {
})
const Root = ({store}) => {
	return (
		<MuiThemeProvider>
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}>
						<Route path = '/zones' component={Zones} />
					</Route>
				</Router>
			</Provider>
		</MuiThemeProvider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('DOMContentLoaded');
	const root = document.querySelector('#app')
	ReactDOM.render(
		<Root store={store}/>,
		root
	)
})

// <Route path = 'new-user' component={NewUser} />
// <NewUser/>
