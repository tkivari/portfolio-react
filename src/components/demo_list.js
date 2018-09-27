import React, { Component } from 'react';
import {demos} from '../config';
import Demo from './demo';
import '../static/css/demo-list.css';
import ReactGA from 'react-ga';

class DemoList extends Component {
    renderDemoList() {
        let renderedDemos = [];

        demos.forEach((demo) => {
            renderedDemos.push(<Demo data={demo} />)
        });

        return renderedDemos;
    }

    render() {
        // Google Analytics
        ReactGA.initialize('UA-32604842-12');
        ReactGA.pageview(window.location.pathname + window.location.search);
        
        return (
            <div className="demo-list">
                {this.renderDemoList()}
            </div>
        )
    }
}

export default DemoList;