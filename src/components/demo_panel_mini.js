import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/demo_panel_mini.css';
import {demos} from '../config';
import Demo from './demo';

class DemoPanelMini extends Component {

    shuffle(array) {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }
    
    renderDemos() {
        let renderedDemos = [];
        demos.forEach((demo) => {
            renderedDemos.push(<Demo data={demo} />)
        });

        return this.shuffle(renderedDemos);
    }
    
    render() {
        return (
            <div className="demo-panel-container">
                {this.renderDemos()}
            </div>
        );
    }
}

function mapStateToProps({header}) {
    return {
        header
    };
}

export default connect(mapStateToProps)(DemoPanelMini);