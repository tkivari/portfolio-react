import React, { Component } from 'react';
import '../../static/css/list_item.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMarker, faPalette, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faLightbulb);
library.add(faMarker);
library.add(faPalette);
library.add(faCode);

class HighlightedListItem extends Component {
    darkenColor(color, percent = -.2) {
        let whiteValues = ['white', '#FFF', '#fff', '#ffffff', '#FFFFFF'];
        if (whiteValues.indexOf(color) != -1) {
            color = "#ffffff";
        }
        
        let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
        return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    }
    
    renderCategory() {
        let category = this.props.data;
        let colors = this.props.colors;
        let darkColor = this.darkenColor(colors.background);
        let circleBgStyle = {
            backgroundColor: darkColor
        };

        let fontStyle = {
            color: colors.titleText,
        }

        let fontBgStyle = {
            color: colors.titleText,
            backgroundColor: colors.background,
            backgroundImage: "linear-gradient(to right, "+colors.background+","+darkColor+")"
        };

        let cat = (
                <div>
                    <div className="highlight-header">
                        <div className="circle-container">
                            <div className="highlight-circle" style={circleBgStyle}></div>
                            <div className={"highlight-icon " + this.props.data.type} style={fontStyle}><FontAwesomeIcon icon={this.props.data.type}></FontAwesomeIcon></div>
                        </div>
                        <div className="highlight-title" style={fontBgStyle}>{category.title}</div>
                    </div>
                    <div className="highlight-points">
                        {this.renderPoints(category.points)}
                    </div>
                </div>
            );

        return cat;
    }
    
    renderPoints(points) {
        let point_list = [];
        points.forEach((point) => {
            point_list.push(
                <div>
                    <div className="point-text" dangerouslySetInnerHTML={{ __html: point }} />
                </div>
            );
        });

        return point_list;
    }

    render() {
        return (
            <div className="highlighted-item">
                
                {this.renderCategory()}

                
            </div>
        );
    }
}

export default HighlightedListItem;