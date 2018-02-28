import React from 'react';
import './options.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const answer = event.target.value;
    const questnid = event.target.id;
    console.log('answer: ', answer, 'id: ', questnid);
    this.props.updateResponse(questnid, answer);
  }

  render() {
    const { userResponse } = this.props;
    const questnId = this.props.id;
    return (
      Object.keys(this.props.options).map((optionElem, index) => (
        <div className="Options">
          <input
            type="radio"
            value={this.props.options[optionElem]}
            id={this.props.id} // question id
            checked={userResponse[questnId] === this.props.options[optionElem]}
            onChange={this.changeHandler}
          />   {this.props.options[optionElem]}
        </div>
      ))

    );
  }
}

export default Options;
