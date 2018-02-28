import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const HeaderComponent = props => (
  <div className="Header-Main">
    <div className="Header-title">Quizzy</div>
    <div className="Header-userName">{props.username}</div>
  </div>
);


HeaderComponent.propTypes = {
  username: PropTypes.string.isRequired,
};

export default HeaderComponent;
