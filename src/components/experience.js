import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyList from './company_list';
import { companies } from '../config';


class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container experience-container">
                <h1>My Experience</h1>
                <div className="company-list">
                    <CompanyList companies={companies} />                        
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

export default connect(mapStateToProps)(Experience);