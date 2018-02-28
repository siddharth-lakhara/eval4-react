import React from 'react';
import LeaderTable from './leaderTable';
import './leaderBoard.css';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderBoard: [],
    };
    this.updateLeaderboard = this.updateLeaderboard.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    fetch('/leaders')
      .then(response => response.json())
      .then((response) => {
        this.updateLeaderboard(response);
      });
  }

  changeState() {
    this.props.changeState(0);
  }

  updateLeaderboard(response) {
    this.setState({
      leaderBoard: response,
    }, () => {
      console.log('now, here: ', this.state.leaderBoard);
    });
  }

  render() {
    return (
      <div className="leaderBoard-main">
        <div className="leaderBoard-userScore">
          <p className="leaderBoard-text1">Your Score</p>
          <span className="leaderBoard-span1">6</span>
          <span className="leaderBoard-span2"> /12</span>
        </div>
        <div className="leaderBoard-content">
          <div className="leaderBoard-text">Leaderboard</div>
          <LeaderTable
            leaderBoard={this.state.leaderBoard}
          />
          <button className="leaderBoard-button" onClick={this.changeState}>
            Play again
          </button>
        </div>
      </div>
    );
  }
}

export default LeaderBoard;
