import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import HighlightedListItem from './shared/highlighted_list_item';
import '../static/css/company-details.css';

class CompanyDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stop_animating: false,
            whiteValues: ['white', '#FFF', '#fff', '#ffffff', '#FFFFFF']
        }

        this.renderCanvas = this.renderCanvas.bind(this);
        this.explodeLogo = this.explodeLogo.bind(this);
    }
    
    isSelected() {
        return this.props.company.hasOwnProperty("company_id") && this.props.company.company_id === this.props.data.company_id;
    }


    drawRoundedRectangle(context, x, y, width, height, radius = 5, color) {
        
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
        
        context.fillStyle = color;
        context.fill();
    }

    explodeLogo(context, data, canvas_width, canvas_height, image_width, image_height) {

        let origin_x = (context.canvas.width / 2) - (image_width / 2);
        let origin_y = this.calculateYOrigin(context, image_height);

        // clear canvas
        context.clearRect(0,0,context.canvas.width, context.canvas.height)

        data.forEach((px, i) => {
            // draw particle
            let new_x = px.x + origin_x;
            let new_y = px.y + origin_y;
            let distance = 1;
            
            context.fillStyle = "rgba("+px.r+","+px.g+","+px.b+","+(px.a/255)+")";
            context.beginPath();
            context.arc(new_x, new_y, px.radius, 0, 2 * Math.PI, false);
            context.fill();

            if (px.radius > 1) px.radius-=0.1
            
            // update particle position based on angle and speed
            data[i].x = Math.round(Math.cos(px.angle * Math.PI / 180) * distance*px.speed + px.x);
            data[i].y = Math.round(Math.sin(px.angle * Math.PI / 180) * distance*px.speed + px.y);
        });

        if (this.props.company.company_id == this.props.data.company_id && !this.state.stop_animating) {
            requestAnimationFrame(() => {
                this.explodeLogo(context, data, canvas_width, canvas_height, image_width, image_height);
            });
        } else if (this.props.company.company_id == this.props.data.company_id && this.state.stop_animating) {
            // reset the animation so we can show it again if the user visits this experience page again
            this.setState({stop_animating: false});
        }
    }

    prepareData(context, pixelData, canvas_width, canvas_height, image_width, image_height) {

        let formattedData =[];

        let j = 0;
        
        for (let i = 0; i < pixelData.length; i+=4) {
            let x = (i / 4) % image_width;
            let y = Math.floor((i / 4) / image_width);
            let angle = Math.floor(Math.random() * (361));
            let speed = Math.floor(Math.random() * (40 - 5) + 5);

            if ((i / 4) % 17 == 0) {
                formattedData[j] = {
                    r: pixelData[i],
                    g: pixelData[i+1],
                    b: pixelData[i+2],
                    a: pixelData[i+3],
                    x,
                    y,
                    angle,
                    speed,
                    radius: Math.floor(Math.random() * (8 - 2) + 2)
                }
                ++j;
            }
        }

        this.explodeLogo(context, formattedData, canvas_width, canvas_height, image_width, image_height);

        // stop calls to requestAnimationFrame after the animation has been faded out
        setTimeout(() => {
            this.setState({stop_animating: true});
        }, 2000);
    }

    resizeCanvas(canvas) {
        canvas.setAttribute("height", canvas.parentNode.clientHeight);
        canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
    }

    clearCanvas(canvas) {
        this.resizeCanvas(canvas);
        let context = canvas.getContext("2d");
        context.clearRect(0,0,context.canvas.width, context.canvas.height);
    }

    renderCanvas(canvas) {

        this.resizeCanvas(canvas);
        this.setState({stop_animating: false});
        
        let context = canvas.getContext("2d");
        context.strokeStyle = "rgb(255, 0, 0)";
        context.fillStyle = "rgba(255, 255, 0, .5)";
        
        let image = new Image();
        let c = document.createElement("canvas")
        let ctx = c.getContext("2d");

        

        image.onload = () => {
            
            c.setAttribute("height", image.height);
            c.setAttribute("width", image.width);
            
            let origin_x = (context.canvas.width / 2) - (image.width / 2);
            let origin_y = this.calculateYOrigin(context, image.height);
            this.clearCanvas(canvas);
            
            if (this.state.whiteValues.indexOf(this.props.company.backgroundColor) == -1) {
                console.log(this.props.data.backgroundColor);
                let origin_x = (canvas.width / 2) - (image.width / 2);
                let origin_y = this.calculateYOrigin(context, image.height);
                context.fillStyle = this.props.data.backgroundColor;
                //context.fillRect(origin_x-20,origin_y-20,image.width+40, image.height+40);
                this.drawRoundedRectangle(context,origin_x-20,origin_y-20,image.width+40,image.height+40,10,this.props.data.backgroundColor);
                ctx.fillStyle = this.props.data.backgroundColor;
                ctx.fillRect(0,0,image.width+20, image.height+20);
            }
            ctx.drawImage(image, 10, 10);
            context.drawImage(image, origin_x, origin_y, image.width, image.height);
            
            let pixelData = ctx.getImageData(0,0,image.width+20,image.height+20);
            let iw = c.width;
            let ih = c.height;
            c.remove(); // dispose element to reduce memory footprint
            setTimeout(() => { this.prepareData(context, pixelData.data, iw, ih, image.width, image.height); }, 500);
            setTimeout(() => {
                this.refs.companycontent.style.opacity = 1;
                this.refs.canvas.style.opacity = 0;
            }, 1500);

        }
        image.src = this.props.data.logo;
    }

    calculateYOrigin(context, image_height) {
        if (window.screen.width <= 400) {
            console.log('heeere');
            return 75;
        }
        return 200; 
        
        // return (context.canvas.height / 2) - (image_height / 2);
    }

    componentDidUpdate(prevProps, prevState) {
        let canvas = this.refs.canvas;
        this.clearCanvas(canvas);
        
        if(prevProps.company.company_id!==this.props.company.company_id && this.props.company.company_id == this.props.data.company_id){
            this.renderCanvas(canvas);
        } else if(this.props.company.company_id != this.props.data.company_id) {
            this.refs.companycontent.style.opacity = 0;
            this.refs.canvas.style.opacity = 1;
        }

        console.log("height",this.refs.companydetails.clientHeight);
        this.refs.companydetails.style.height = this.refs.companycontent.style.height;
    }

    componentDidMount() {
        let canvas = this.refs.canvas;
        this.clearCanvas(canvas);
        
        if(this.props.company.company_id == this.props.data.company_id){
            this.renderCanvas(canvas);
        } else {
            this.refs.companycontent.style.opacity = 0;
            this.refs.canvas.style.opacity = 1;
        }
    }

    renderJobDescription() {
        let desc_arr = [];

        let colors = {
            background: this.props.data.titleBackgroundColor,
            titleText: this.props.data.titleTextColor 
        };

        this.props.data.description.forEach((desc) => {
            desc_arr.push(<HighlightedListItem data={desc} colors={colors} />);
        });

        return desc_arr;
    }

    render() {
        let company = this.props.data
        
        return (
            <div ref="companydetails" className={"company-details " + (this.isSelected() ? "selected":"")} id={"company-details-"+company.company_id}>
                <div ref="companycontent" className="company-fade-in">
                    <div className="content-info">
                        <h2>{company.name}</h2>
                        <h3>{company.title}</h3>
                        <div className="date-info">{company.start_date} - {company.end_date}</div>
                            {this.renderJobDescription()}
                        </div>
                </div>
                <div className="company-canvas">
                    <canvas ref="canvas" id={"company-canvas-"+company.company_id}></canvas>
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

export default connect(mapStateToProps)(CompanyDetails);