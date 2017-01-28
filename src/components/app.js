const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')

//components
const Zones = require('./zones')

const App = (props) => {
  return (
  <div>
    <div className="banner">
      <h1>gardenApp</h1>
      <h2>Garden, record, enjoy.</h2>
      {/* I want to have the Zone component show up in here. Have tried <Zone /> but nothing... */}
    </div>
  </div>
  )
}

module.exports = connect((state) => state)(App)
