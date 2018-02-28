import React from 'react';
import MainCard from './login/mainCard';
import LoginPage from './loggedin/loginPage';
import LeaderBoard from './leaderBoard/leaderBoard';
import './body.css';

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 0,
      username: '',
      maxScore: 0,
      userScore: 0,
    };
    this.changeState = this.changeState.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setMaxScore = this.setMaxScore.bind(this);
    this.setUserScore = this.setUserScore.bind(this);
  }

  setUserName(newUserName) {
    this.setState({
      username: newUserName,
    }, () => {
      console.log('username set');
    });
    this.props.setHeaderText(newUserName);
  }

  setMaxScore(maxScore) {
    this.setState({
      maxScore,
    }, () => {
      console.log('max score set');
    });
  }

  setUserScore(newScore) {
    this.setState({
      userScore: newScore,
    });
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
            username={this.state.username}

          />
        </div>
      );
    } else if (this.state.loginStatus === 2) {
      return (
        <LeaderBoard
          changeState={this.changeState}
          username={this.state.username}
          maxScore={this.state.maxScore}
          userScore={this.state.userScore}
        />
      );
    }
    return (
      <div className="Body-main">
        <MainCard
          changeState={this.changeState}
          setUserName={this.setUserName}
        />
      </div>
    );
  }
}

export default BodyComponent;
