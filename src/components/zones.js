const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')


class Zones extends React.Component {
  render() {
    return(
      <div>
        <p>This is the zone component</p>
      </div>
    )
  }
}
module.exports =  connect((state) => state)(Zones)
