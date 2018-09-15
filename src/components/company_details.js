import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/company-details.css';

class CompanyDetails extends Component {
    constructor(props) {
        super(props);

        // this.resize = this.resize.bind(this);
    }
    
    isSelected() {
        return this.props.company.hasOwnProperty("company_id") && this.props.company.company_id === this.props.data.company_id;
    }

    render() {
        let company = this.props.data

        return (
            <div className={"company-details " + (this.isSelected() ? "selected":"")} id={"company-details-"+company.company_id}>
                <div className="company-fade-in">
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                </div>
            </div>
        );
    }
}


function mapStateToProps({company}) {
    return {
        company
    };
}

export default connect(mapStateToProps)(CompanyDetails);