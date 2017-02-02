const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class Profile extends React.Component {
  render() {
    return(
      <div>
        <p>this is the profile page<p>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Profile)
