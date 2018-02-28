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
  }

  updateQuestions(newQuestionsObject) {
    this.setState({
      allQuestions: newQuestionsObject,
    });
  }

  render() {
    return (
      <div className="loginPage" >
        <QuestionDisplayer
          allQuestions={this.state.allQuestions}
        />
        <button>Calc</button>
      </div>
    );
  }
}

export default loginPage;
