import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowCompanyAction } from '../actions/company_actions';
import '../static/css/company.css';

class Company extends Component {
    constructor(props) {
        super(props);

        this.selectCompany = this.selectCompany.bind(this);

        // auto-select the first company in the list, if none is already selected
        if (!this.props.company.hasOwnProperty("company_id") || !this.props.company.company_id) {
            this.selectCompany();
        }
    }
    
    isSelected() {
        return this.props.company.hasOwnProperty("company_id") && this.props.company.company_id === this.props.data.company_id;
    }

    selectCompany() {
        this.props.ShowCompanyAction(this.props.data.company_id);
    }

    render() {
        let company = this.props.data
        
        let logoStyle = {
            backgroundImage: 'url(' + company.logo + ')',
            backgroundColor: company.backgroundColor,
            color: company.textColor
        }
        
        return (
            <div>
                <div className={"company-container " + (this.isSelected() ? "selected":"")} onClick={this.selectCompany}>
                    <div className="company-icon-container"  style={logoStyle}></div>
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

export default connect(mapStateToProps, { ShowCompanyAction })(Company);