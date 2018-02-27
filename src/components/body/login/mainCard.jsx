import React from 'react';
import LoginCard from './LoginCard';
import './mainCard.css';
import WelcomeCard from './WelcomeCard';

class MainCard extends React.Component {
  render() {
    return (
      <div className="login-MainCard">
        <WelcomeCard />
        <LoginCard />
      </div>
    );
  }
}

export default MainCard;
