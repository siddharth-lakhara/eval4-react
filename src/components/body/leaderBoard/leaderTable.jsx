import React from 'react';
import PropTypes from 'prop-types';
import './leaderTable.css';

class leaderTable extends React.Component {
  render() {
    console.log();
    return (
      this.props.leaderBoard.map((leader, index) => (
        <div className="leaderTables-main">
          <div>
            <span className="leaderTables-index">{index + 1}.</span>
            <span className="leaderTables-name"> {leader.username}</span>
          </div>
          <div className="leaderTables-score">
            {leader.score}
          </div>

        </div>
      ))
    );
  }
}

leaderTable.propTypes = {
  leaderBoard: PropTypes.array.isRequired,
};

export default leaderTable;
