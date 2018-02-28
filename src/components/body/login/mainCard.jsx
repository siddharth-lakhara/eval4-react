import React from 'react';
import PropTypes from 'prop-types';
import LoginCard from './LoginCard';
import './mainCard.css';
import WelcomeCard from './WelcomeCard';

const MainCard = props => (
  <div className="login-MainCard">
    <WelcomeCard />
    <LoginCard
      changeState={props.changeState}
      setUserName={props.setUserName}
    />
  </div>
);


MainCard.propTypes = {
  changeState: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default MainCard;
