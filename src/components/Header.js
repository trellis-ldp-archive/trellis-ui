import React from 'react';
import logo from '../assets/logo.svg';
import Config from '../Config';

const Header = ({identifier = ''}) => (
  <header className="LdpApp-header">
    <img src={logo} className="LdpApp-logo" alt="logo" />
    <h1 className="LdpApp-title">{Config.BASE_URL}{identifier}</h1>
  </header>
)

export default Header
