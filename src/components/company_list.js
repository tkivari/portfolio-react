import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";
import Company from './company';
import { companies } from '../config';


class CompanyList extends Component {
    constructor(props) {
        super(props);
    }

    renderCompanies() {
        let renderableCompanies = [];

        companies.forEach((company) => {
            renderableCompanies.push(<Company key={company.company_id} data={company} />)
        });

        return renderableCompanies;
    }

    render() {
        let slider_settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div className="company-list-container">
                <Slider {...slider_settings}>
                    {this.renderCompanies()}                        
                </Slider>
            </div>
        );
    }
}


function mapStateToProps({header}) {
    return {
        header
    };
}

export default connect(mapStateToProps)(CompanyList);