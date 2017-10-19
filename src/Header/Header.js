import React, {Component} from 'react';
import {
  Navbar,
  Button,
  NavItem,
  Nav,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

import '../App.css';

class Header extends Component {
  goTo(route) {
    this
      .props
      .history
      .replace(`/${route}`)
  }

  login() {
    this
      .props
      .auth
      .login();
  }

  logout() {
    this
      .props
      .auth
      .logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">M2 Graphics</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Gallery</NavItem>
              <NavItem eventKey={2} href="#">Order</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href="#">
                {!isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this
                    .login
                    .bind(this)}>
                    Log In
                  </Button>
                )
}
                {isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this
                    .logout
                    .bind(this)}>
                    Log Out
                  </Button>
                )
}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }
}

export default Header;
