import React, { Component } from 'react';
import { connect } from 'react-redux';


class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container skill-container">
                <h1>My Skills</h1>
                <div className="skill-list">
                    
                </div>
            </div>
        )
    }
}


function mapStateToProps({header}) {
    return {
        header
    };
}

export default connect(mapStateToProps)(Skills);