import React from 'react';
import logo from '../assets/logo.svg';
import Config from '../Config';

const Header = ({identifier = ''}) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{Config.BASE_URL}{identifier}</h1>
  </header>
)

export default Header
