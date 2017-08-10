import React, { Component } from 'react';


class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <div className="navbar-fixed">
          <nav className="cyan darken-1">
            <a href="#" class="brand-logo center">Logo Rifa</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">Registro</a></li>
                <li><a href="#">Artículos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;