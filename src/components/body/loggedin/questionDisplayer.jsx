import React from 'react';
import './questionDisplayer.css';
import Options from './options';

class QuestionDisplayer extends React.Component {
  render() {
    return (
      Object.keys(this.props.allQuestions).map((question, index) => (
        <div className="">
          <div className="QuestionDisplayer-head">
                    Question {index + 1}
          </div>
          <div className="QuestionDisplayer-question" >
            {this.props.allQuestions[question].questn}
          </div>
          <Options
            id={this.props.allQuestions[question].questnid}
            options={this.props.allQuestions[question].options}
          />
        </div>
      )));
    //   <div className="QuestionDisplayer">
    //     Displays all questions
    //   </div>
    // );
  }
}

export default QuestionDisplayer;
