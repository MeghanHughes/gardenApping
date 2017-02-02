const React = require('react')
const { connect } = require('react-redux')


const Home = (props) => {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
