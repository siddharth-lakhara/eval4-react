import React from 'react';
import './LoginCard.css';

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.loginFn = this.loginFn.bind(this);
  }

  changeHandler(event) {
    const input = event.target.value;
    this.setState({
      userName: input,
    }, () => {
      console.log(this.state.userName);
    });
  }

  loginFn() {
    const { userName } = this.state;
    fetch('/login', {
      method: 'POST',
      body: this.state.userName,
    }).then(() => {
      this.setState({
        userName: '',
      });
      this.props.setUserName(userName);
      this.props.changeState(1);
    });
  }

  render() {
    return (
      <div className="LoginCard-main">
        <div className="LoginCard-aligner" />
        <div className="LoginCard-Contents">
          <div className="LoginCard-text1">
            Login
          </div>
          <div>
            <p className="LoginCard-text2">Username</p>
            <input
              type="text"
              className="LoginCard-input"
              onChange={this.changeHandler}
              value={this.state.userName}
            />
          </div>
          <button
            className="LoginCard-login"
            onClick={this.loginFn}
          >Login
          </button>
        </div>
      </div>
    );
  }
}


export default LoginCard;
