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
const initialState = require('../state')
// components
const App = require('./components/app')
const Home = require('./components/home')
const Profile = require('./components/profile')




const store = createStore(reducer, initialState)
console.log('this is store', store);

store.subscribe(()=> {
	console.log('loggin state', store.getState());
})

const Root = ({store}) => {
	return (
		<MuiThemeProvider>
			<Provider store = {store}>
				<Router history = {hashHistory}>
					<Route path = '/' component={App}>
						<IndexRoute component={Home} />
						<Route path = 'profile' component={Profile} />
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





// const initialState = {
// 	zones: {
// 		1: {id: 1, name: 'Patio'},
// 		2: {id: 2, name: 'Back of house (kitchen)'},
// 		3: {id: 3, name: 'Side of house (bathroom)'}
// 	},
// }
