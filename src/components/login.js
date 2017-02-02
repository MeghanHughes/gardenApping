const { connect } = require('react-redux')
const { Link } = require('react-router')
const React = require('react')
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

// class component (is an object) includes render() use this.props => define new handleClick => needs refs
const Login = (props) => {
    return(
      <div className='login'>
        <form id="login" action="/profile" method="POST">
            <div>
                Email:
                <input className='homePageButton' type='text' ref='email' placeholder='Email' />
                Password:
                <input className='homePageButton' type='password' ref='passwordEntry' placeholder='Password' />
                  <RaisedButton type="submit" id="login-submit" data-submit="...Sending" label="LOGIN" style={style} />
            </div>
        </form>
      </div>
    )
}

module.exports = connect((state) => state)(Login)

// <RaisedButton onClick={this.handleClick.bind(this)} >Login </RaisedButton>
// <AuthErr  {...this.props} />
