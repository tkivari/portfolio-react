import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";
import Company from './company';
import CompanyDetails from './company_details';
import DemoPanelMini from '../components/demo_panel_mini';
import { companies } from '../config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft);
library.add(faAngleRight);



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

    renderDemoPanel() {
        if (window.screen.width > 1100) {
            return (
                <div className="mini-demos">
                    <h2>Demos</h2>
                    <DemoPanelMini />
                </div>
            );
        }
    }

    render() {

        function NextArrow(props) {
            const { className, onClick } = props
            return (
                <div 
                    className={className}
                    onClick={onClick}
                >
                    <FontAwesomeIcon
                        icon="angle-right"
                        color="#fff"
                        size="2x"
                    />
                </div>
            );
        }
        
        function PrevArrow(props) {
            const { className, onClick } = props
            return (
                <div 
                    className={className}
                    onClick={onClick}
                >
                    <FontAwesomeIcon
                        icon="angle-left"
                        color="#fff"
                        size="2x"
                    />
                </div>
            );
        }


        let slider_settings = {
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 7,
            slidesToScroll: 1,
            // swipe: true,
            draggable: false,
            nextArrow: <NextArrow className="react-slick-next" />,
            prevArrow: <PrevArrow className="react-slick-prev" />,
            responsive: [
                {
                  breakpoint: 1700,
                  settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                 }
                },
                {
                  breakpoint: 1500,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                    breakpoint: 1055,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      afterChange: (current) => {
                        // autoselect if there is only one slide displayed
                        document.querySelector('.slick-current .company-container').click();
                      },
                    }
                }

              ]
        };

        let renderedData = this.renderData();

        return (
            <div className="company-list-container">
                <Slider {...slider_settings}>
                    {renderedData.companies}                        
                </Slider>

                <div className="company-details-container">
                    {renderedData.details}
                    {this.renderDemoPanel()}
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