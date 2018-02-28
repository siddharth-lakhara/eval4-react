import React from 'react';
import './App.css';
import Header from './components/header/header';
import BodyComponent from './components/body/body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.setHeaderText = this.setHeaderText.bind(this);
  }

  setHeaderText(newUserName) {
    this.setState({
      username: newUserName,
    });
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <BodyComponent setHeaderText={this.setHeaderText} />
      </div>
    );
  }
}

export default App;
