import React from 'react';
import './header.css';

const HeaderComponent = props => (
  <div className="Header-Main">
    <div className="Header-title">Quizzy</div>
    <div className="Header-userName">Username{props.userName}</div>
  </div>
);

export default HeaderComponent;
