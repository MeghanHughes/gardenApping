const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Zones = require('./zones')


const Profile = () => {
  return(
    <div>
      <p>This is the profile page</p>
      <Zones />
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
