import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


function mapStateToProps({header}) {
    return {
        header
    };
}

export default connect(mapStateToProps)(Experience);