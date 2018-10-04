import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import '../static/css/demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.data.hasOwnProperty("url")) {
            window.open(this.props.data.url, "_blank");
        } else if (this.props.data.hasOwnProperty("link")) {
            this.props.history.push('/demo/react-zoomer');
        }
    }
    
    render() {
        return (
            <div className="demo-container" onClick={this.handleClick}>
                <img src={this.props.data.image} width="320" />
                <div className="demo-content">
                    <h4>{this.props.data.name}</h4>
                    {this.props.data.description}
                </div>
            </div>
        );
    }
}

export default withRouter(Demo);