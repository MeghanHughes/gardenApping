const React = require('react')
const _ = require('lodash')

//components


module.exports = function App (props) {
  console.log('props', props)
  console.log('state', props.store.getState())

  return (
  <div>
    <div className="banner">
      <h1>gardenApp</h1>
      <h2>Garden, record, enjoy.</h2>
    </div>
  </div>
  )
}
