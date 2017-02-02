const React = require('react')
const { connect } = require('react-redux')
const Login = require('./login')

const Home = (props) => {
  return (
      <div>
        <Login />
      </div>
  )
}

module.exports = connect((state) => state)(Home)
