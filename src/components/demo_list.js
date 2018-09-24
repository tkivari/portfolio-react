import React, { Component } from 'react';
import {demos} from '../config';
import Demo from './demo';
import '../static/css/demo-list.css';

class DemoList extends Component {
    renderDemoList() {
        let renderedDemos = [];

        demos.forEach((demo) => {
            renderedDemos.push(<Demo data={demo} />)
        });

        return renderedDemos;
    }

    render() {
        return (
            <div className="demo-list">
                {this.renderDemoList()}
            </div>
        )
    }
}

export default DemoList;