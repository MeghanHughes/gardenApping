const React = require('react')
const { connect } = require('react-redux')


function Home() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
