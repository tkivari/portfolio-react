import React, { Component } from 'react';
import '../static/css/demo.css';

class Demo extends Component {
    render() {
        return (
            <div className="demo-container" onClick={()=> window.open(this.props.data.url, "_blank")}>
                <img src={this.props.data.image} width="320" />
                <div className="demo-content">
                    <h4>{this.props.data.name}</h4>
                    {this.props.data.description}
                </div>
            </div>
        );
    }
}

export default Demo;