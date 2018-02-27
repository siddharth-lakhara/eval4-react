import React from 'react';
import MainCard from './login/mainCard';
import './body.css';

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 0,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(newState) {
    this.setState({
      loginStatus: newState,
    });
  }

  render() {
    if (this.state.loginStatus) {
      <div className="Body-main">
        <MainCard
          changeState={this.changeState}
        />
      </div>
      );
    } else {
      return (
        <div className="Body-main">
          <MainCard
            changeState={this.changeState}
          />
        </div>
      );
    }
  }
}

export default BodyComponent;
