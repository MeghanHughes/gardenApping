const { connect } = require('react-redux')
const { Link } = require('react-router')
const React = require('react')
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};


const Login = (props) => {
    return(
      <div className='login'>
        <form>
            <div>
                Email:
                <input className='homePageButton' type='text' ref='email' placeholder='Email' />
                Password:
                <input className='homePageButton' type='password' ref='passwordEntry' placeholder='Password' />
                  <RaisedButton label="LOGIN" style={style} />
            </div>
        </form>
      </div>
    )
}

module.exports = connect((state) => state)(Login)

// <RaisedButton onClick={this.handleClick.bind(this)} >Login </RaisedButton>
// <AuthErr  {...this.props} />
