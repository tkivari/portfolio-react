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
        this.props.header.showMenu ? this.props.HideMenuAction() : this.props.ShowMenuAction();;
    }

    menuClass() {
        let className = this.props.header.showMenu ? "open" : "closed";

        return className;
    }

    render() {
        return (
            <div>
                <div className={"menu " + this.menuClass()}>
                    <nav>
                        <div className="nav-item"><Link to="/">Experience</Link></div>
                        <div className="nav-item"><Link to="/demos">Demos</Link></div>
                        {/* <div className="nav-item"><Link to="/about">About Me</Link></div> */}
                        <div className="nav-item"><Link to="/contact">Contact Me</Link></div>
                    </nav>
                </div>
                <div className="header">
                     
                    <div className="header-text">
                        <div className="icon"><span className="lettering">tk</span></div>
                        <div className="name-title">
                            <div className="name">Tyler Kivari</div>
                            <div className="title">full stack creative developer</div>
                        </div>
                    </div>

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