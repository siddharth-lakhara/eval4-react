import React from 'react';
import './App.css';
import Header from './components/header/header';
import BodyComponent from './components/body/body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
