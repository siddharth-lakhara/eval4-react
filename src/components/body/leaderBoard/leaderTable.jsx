import React from 'react';
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
        // <div>
        //   {leader}
        // </div>
      ))
    //   Object.keys(booksArray).map(BookElem => (
    //         <BookCard
    //             className="bookCard-display"
    //             Name={booksArray[BookElem].Name}
    //             rating={booksArray[BookElem].rating}
    //             like={booksArray[BookElem].like}
    //             author={this.props.author}
    //             bookId={booksArray[BookElem].books_id}
    //           />
    //   ))
    );
  }
}

export default leaderTable;
