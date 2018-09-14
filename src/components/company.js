import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/company.css';

class Company extends Component {
    isSelected() {
        return (this.props.company.hasOwnProperty("company_id") && this.props.company.company_id == this.props.data.company_id) || (!this.props.company.hasOwnProperty("company_id"))
    }
    render() {
        let company = this.props.data
        
        let logoStyle = {
            backgroundImage: 'url(' + company.logo + ')',
            backgroundColor: company.backgroundColor,
            color: company.textColor
        }
        return (
            <div className={"company-container " + (this.isSelected() ? "selected":"")}  style={logoStyle}></div>
        );
    }
}


function mapStateToProps({company}) {
    return {
        company
    };
}

export default connect(mapStateToProps)(Company);