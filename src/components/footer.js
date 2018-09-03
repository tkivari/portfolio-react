import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShowMenuAction, HideMenuAction } from '../actions/header_actions';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps({footer}) {
    return {
        footer
    };
}

export default connect(mapStateToProps)(Footer);