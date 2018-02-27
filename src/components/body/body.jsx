import React from 'react';
import MainCard from './login/mainCard';
import LoginPage from './loggedin/loginPage';
import './body.css';

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 2,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(newState) {
    this.setState({
      loginStatus: newState,
    });
  }

  render() {
    if (this.state.loginStatus === 1) {
      return (
        <div className="Body-loggedin">
          <LoginPage
            changeState={this.changeState}
          />
        </div>
      );
    } else if (this.state.loginStatus === 2) {
      return (
        <div>
          leaderBoard page
        </div>
      );
    }
    return (
      <div className="Body-main">
        <MainCard
          changeState={this.changeState}
        />
      </div>
    );
  }
}

export default BodyComponent;
