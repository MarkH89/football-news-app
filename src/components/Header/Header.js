import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import './Header.css';
import logo from '../../assets/football.png';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            openMenu: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav () {
        this.setState({ openMenu: !this.state.openMenu });
    }

    render () {
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src={logo} alt="Football icon from icons8.com" width="50" height="50" />
                            </a>
                            <a role="button" className={"navbar-burger " + ( this.state.openMenu ? 'is-active' : '' )} onClick={this.toggleNav} aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className={"navbar-menu " + ( this.state.openMenu ? 'is-active' : '' ) }>
                            <div className="navbar-end has-text-centered">
                                <a className="navbar-item" href="#">News</a>
                                <a className="navbar-item" href="#">Fixtures</a>
                                <a className="navbar-item" href="#">Results</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <Banner />
            </header>    
        )
    }
}

export default Header;