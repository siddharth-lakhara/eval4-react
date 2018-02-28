import React from 'react';
import './loginPage.css';
import QuestionDisplayer from './questionDisplayer';

class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
    };
    this.updateQuestions = this.updateQuestions.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    fetch('/questions')
      .then(response => response.json())
      .then((response) => {
        let res = {};
        if (Object.keys(response).length === 0) {
          fetch('/updatedb').then(() => {
            fetch('/questions').then((response2) => {
              res = response2.json();
              this.updateQuestions(res);
            });
          });
        } else {
          this.updateQuestions(response);
        }
      });
    fetch(`/fetch/${this.props.username}`)
      .then(response => (response.json()))
      .then((response) => {
        this.props.getResponse(response);
      });
  }

  updateQuestions(newQuestionsObject) {
    this.setState({
      allQuestions: newQuestionsObject,
    }, () => {
      this.props.setMaxScore(this.state.allQuestions.length);
    });
  }

  complete() {
    fetch('/calc', {
      method: 'POST',
      body: JSON.stringify({
        username: this.props.username,
      }),
    })
      .then(response => response.json())
      .then((response) => {
        this.props.setUserScore(response.score);
        this.props.changeState(2);
      });
  }

  render() {
    return (
      <div className="loginPage" >
        <QuestionDisplayer
          allQuestions={this.state.allQuestions}
          updateResponse={this.props.updateResponse}
          userResponse={this.props.userResponse}
        />
        <button
          disabled={Object.keys(this.state.allQuestions).length !== this.props.totalAnswer}
          onClick={this.complete}
        >Calc
        </button>
      </div>
    );
  }
}

export default loginPage;
