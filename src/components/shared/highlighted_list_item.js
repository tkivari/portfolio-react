import React, { Component } from 'react';
import '../../static/css/list_item.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMarker, faPalette, faCode, faPaintBrush, faDatabase, faComment, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faPython , faNode, faWordpress, faHtml5  } from '@fortawesome/free-brands-svg-icons';


library.add(faLightbulb);
library.add(faMarker);
library.add(faPalette);
library.add(faCode);
library.add(faPaintBrush);
library.add(faPython);
library.add(faNode);
library.add(faWordpress);
library.add(faHtml5);
library.add(faDatabase);
library.add(faComment);
library.add(faTrophy);


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

        console.log(this.props.data.type);

        let icon = null;
        let brands = [
            {
                name: "python",
                icon: faPython
            },
            {
                name: "node-js",
                icon: faNode
            },
            {
                name: "html",
                icon: faHtml5
            },
            {
                name: "wordpress",
                icon: faWordpress
            }
        ];

        brands.forEach((b) => {
            if (b.name == this.props.data.type) {
                icon = b.icon;
            }
        });

        icon = icon ? icon : this.props.data.type;





        let cat = (
                <div>
                    <div className="highlight-header">
                        <div className="circle-container">
                            <div className="highlight-circle" style={circleBgStyle}></div>
                            <div className={"highlight-icon " + this.props.data.type} style={fontStyle}><FontAwesomeIcon icon={icon}></FontAwesomeIcon></div>
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
        console.log(points)
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