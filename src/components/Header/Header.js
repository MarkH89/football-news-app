import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header>
                <div className="container">
                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="https://bulma.io">
                                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                            </a>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <a className="navbar-item" href="#">News</a>
                                <a className="navbar-item" href="#">Fixtures</a>
                                <a className="navbar-item" href="#">Results</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;