const { connect } = require('react-redux')
const { Link } = require('react-router')
const React = require('react')
import RaisedButton from 'material-ui/RaisedButton';
const request = require('superagent')


const style = {
  margin: 12,
};

// class component (is an object) includes render() use this.props => define new handleClick => needs refs
class RegisterUser extends React.Component {
  render(){


      return (
      <div className='login'>
        <form id="login" action="/profile" method="POST">
            <div>
                Name:
                <input type='text' ref='name' placeholder='name' />
                Password:
                <input type='text' ref='password' placeholder='Password' />

                  <RaisedButton onClick={this.handleClick.bind(this)} label="RESIGTER" style={style} />
            </div>
        </form>
      </div>
    )
  }

  handleClick(e) {
    // e.preventDefault()
    console.log('refs name', this.refs.name.value);
    console.log('refs password', this.refs.password.value);
    const name = this.refs.name.value
    const password = this.refs.password.value

    request.post('api/v1/register')
    .send({name, password})
    .end((err, response)=>{
      if(err){
        console.log('well that did not work properly', err);
      }else{
        console.log('response.body', response.body);
        this.props.router.push('/profile')
      }
    })
  }
}

module.exports = connect((state) => state)(RegisterUser)
