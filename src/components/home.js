const React = require('react')
const { connect } = require('react-redux')
const Login = require('./login')
const RegisterUser = require('./registerUser')

const Home = (props) => {
  return (
    <div>
        <Login router={props.router} />
        <RegisterUser router={props.router} />
    </div>
  )
}

module.exports = connect((state) => state)(Home)
