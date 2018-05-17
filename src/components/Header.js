import React from 'react';
import logo from '../assets/logo.svg';
import Config from '../Config';

const Header = ({identifier = ''}) => {
  const url = Config.BASE_URL + identifier;
  return (
    <header className="LdpApp-header">
      <img src={logo} className="LdpApp-logo" alt="logo" />
      <h1 className="LdpApp-title">
        <a href={url}>{url}</a>
        <i className="fa fa-xs fa-external-link-alt"/>
      </h1>
    </header>
  )
}

export default Header
