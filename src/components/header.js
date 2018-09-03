import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShowMenuAction, HideMenuAction } from '../actions/header_actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu() {
        console.log('here!');
        console.log(this.props.header);
        this.props.header.showMenu ? this.props.HideMenuAction() : this.props.ShowMenuAction();;
    }

    menuClass() {
        console.log('showMenu: ', this.props.header.showMenu);
        let className = this.props.header.showMenu ? "open" : "closed";

        return className;
    }

    render() {
        return (
            <div>
                <div className={"menu " + this.menuClass()}>
                    <div className="nav-item"><Link to="/">Experience</Link></div>
                    <div className="nav-item"><Link to="/demos">Demos</Link></div>
                    <div className="nav-item"><Link to="/about">About Me</Link></div>
                    <div className="nav-item"><Link to="/contact">Contact Me</Link></div>
                </div>
                <div className="header">
                    <div className="logo-black"><img alt="" className="logo" src="/assets/images/logo.svg" /></div>
                    <div className="menu-option-bar">
                        <div className="hamburger-icon" onClick={this.toggleMenu}>
                            <div className={"button_container " + this.menuClass() } id="toggle"><span className="top"></span><span className="middle"></span><span className="bottom"></span></div>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({header}) {
    return {
        header
    };
}

export default connect(mapStateToProps, { ShowMenuAction, HideMenuAction })(Header);