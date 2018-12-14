import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Logo from '../../assets/images/logo/ui-pttrns.svg';

class Header extends Component {
  render() {
    return (
      <div className="container-fuild">
        <nav className="navbar fixed-top navbar-light bg-lighter">
          <a className="navbar-brand mb-0">
            <img src={Logo} width="auto" height="40" alt="" />
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
