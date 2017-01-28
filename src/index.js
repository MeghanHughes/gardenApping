const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { MuiThemeProvider } = require('material-ui/styles')
const reducer = require('./reducer')
const request = require('superagent')

// components
const App = require('./components/app')
const Zones = require('./components/zones')

const initialState = {
	zones: {
    1: {id: 1, name: 'Patio'},
    2: {id: 2, name: 'Back of house (kitchen)'},
    3: {id: 3, name: 'Side of house (bathroom)'}
  },
}

const store = createStore(reducer, initialState)
console.log('this is store', store);
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
