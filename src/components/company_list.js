import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";
import Company from './company';
import CompanyDetails from './company_details';
import { companies } from '../config';


class CompanyList extends Component {
    constructor(props) {
        super(props);
    }

    renderData() {
        let renderableCompanies = [];
        let renderableDetails = [];

        companies.forEach((company) => {
            renderableCompanies.push(<Company key={company.company_id} data={company} />)
            renderableDetails.push(<CompanyDetails key={company.company_id} data={company} />)
        });

        return {
            companies: renderableCompanies,
            details: renderableDetails
        };
    }

    render() {
        let slider_settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 5,
            slidesToScroll: 1
        };

        let renderedData = this.renderData();

        return (
            <div className="company-list-container">
                <Slider {...slider_settings}>
                    {renderedData.companies}                        
                </Slider>

                <div className="company-details-container">
                    {renderedData.details}
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

export default connect(mapStateToProps)(CompanyList);