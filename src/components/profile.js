const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Profile = () => {
  return(
    <div>
      <p>This is the profile page</p>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
