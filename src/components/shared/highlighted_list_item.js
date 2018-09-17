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
    renderCategory() {
        let category = this.props.data;
        let cat = (
                <div>
                    <div className="highlight-title">{category.title}</div>
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
                <div className="highlight-icon"><FontAwesomeIcon icon={this.props.data.type}></FontAwesomeIcon></div>
                <div className="highlight-triangle"></div>
                
                {this.renderCategory()}

                
            </div>
        );
    }
}

export default HighlightedListItem;