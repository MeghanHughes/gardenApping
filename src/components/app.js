const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Login = require('./login')
// console.log('login', login);
//components
// const Zones = require('./zones')
// const Images = require('./images')

const App = (props) => {
  console.log('this is props from initialState', props);
  return (
  <div>
    <div className="banner">
      <h1>gardenApp</h1>
      <h2>Garden, record, enjoy.</h2>
    </div>
      <Login />
      {props.children}
    <div>
    </div>
  </div>
  )
}

module.exports = connect((state) => state)(App)

// <Zones />
