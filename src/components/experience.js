import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyList from './company_list';
import { companies } from '../config';
import ReactGA from 'react-ga';

class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Google Analytics
        ReactGA.initialize('UA-32604842-12');
        ReactGA.pageview(window.location.pathname + window.location.search);

        return (
            <div className="container experience-container">
                {/* <h1>Work Experience</h1> */}
                <div className="company-list">
                    <CompanyList companies={companies} />
                    <div className="footer-banner">psst! this site was built with react + redux and containerized with docker - check out the source code <a href="//www.github.com/tkivari/portfolio-react" target="_blank">here!</a></div>
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