import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../static/css/company-details.css';

class CompanyDetails extends Component {
    constructor(props) {
        super(props);

        this.renderCanvas = this.renderCanvas.bind(this);
    }
    
    isSelected() {
        return this.props.company.hasOwnProperty("company_id") && this.props.company.company_id === this.props.data.company_id;
    }

    generateSquares() {
        let matrix = [5, 6];
        
    }

    getRandomCoordinate(width, height) {
        return {
            x: Math.floor(Math.random() * (width)),
            y: Math.floor(Math.random() * (height)),
        }
    }

    // drawLogo(context, data) {
        
    //     context.clearRect(0,0,context.canvas.width, context.canvas.height)

    //     var y_pos = 20;
    //     var x_pos = context.canvas.width - width - 20; // 20 pixel margin

        
    //     let {x, y} = this.getRandomCoordinate(width, height);
    //     let index = (y * width + x) * 4;

    //     // context.putImageData



    //     setTimeout(() => {
    //         requestAnimationFrame(() => {
    //             this.drawLogo(context, pixelData, drawnPixelData, width, height)
    //         }, 10);
    //     });
    // }

    explodeLogo(context, data, canvas_width, canvas_height, image_width, image_height) {

        let origin_x = (context.canvas.width / 2) - (image_width / 2);
        let origin_y = (context.canvas.height / 2) - (image_height / 2);

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
            
            // update particle position based on angle and speed
            data[i].x = Math.round(Math.cos(px.angle * Math.PI / 180) * distance*px.speed + px.x);
            data[i].y = Math.round(Math.sin(px.angle * Math.PI / 180) * distance*px.speed + px.y);
        });

        if (this.props.company.company_id == this.props.data.company_id) {
            requestAnimationFrame(() => {
                this.explodeLogo(context, data, canvas_width, canvas_height, image_width, image_height);
            });
        }
    }

    prepareData(context, pixelData, canvas_width, canvas_height, image_width, image_height) {

        let formattedData =[];

        // console.log(pixelData);
        let j = 0;
        
        for (let i = 0; i < pixelData.length; i+=4) {
            let x = (i / 4) % image_width;
            let y = Math.floor((i / 4) / image_width);
            let angle = Math.floor(Math.random() * (361));
            let speed = Math.floor(Math.random() * (10 - 5) + 5);

            if ((i / 4) % 10 == 0) {
                formattedData[j] = {
                    r: pixelData[i],
                    g: pixelData[i+1],
                    b: pixelData[i+2],
                    a: pixelData[i+3],
                    x,
                    y,
                    angle,
                    speed,
                    radius: Math.floor(Math.random() * (15 - 2) + 2)
                }
                ++j;
            }
        }

        this.explodeLogo(context, formattedData, canvas_width, canvas_height, image_width, image_height);
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
        
        let context = canvas.getContext("2d");
        context.strokeStyle = "rgb(255, 0, 0)";
        context.fillStyle = "rgba(255, 255, 0, .5)";
        
        let image = new Image();
        let c = document.createElement("canvas")
        let ctx = c.getContext("2d");

        image.onload = () => {
            c.style.width = image.width;
            c.style.height = image.height;
            let origin_x = (context.canvas.width / 2) - (image.width / 2);
            let origin_y = (context.canvas.height / 2) - (image.height / 2);
            this.clearCanvas(canvas);
            context.drawImage(image, origin_x, origin_y, image.width, image.height);
            ctx.drawImage(image, 0, 0);
            // this.refs.companydetails.appendChild(c);
            let pixelData = ctx.getImageData(0,0,image.width,image.height);
            setTimeout(() => { this.prepareData(context, pixelData.data, c.width, c.height, image.width, image.height); }, 500);
        }
        image.src = this.props.data.logo;
    }

    componentDidUpdate(prevProps, prevState) {
        let canvas = this.refs.canvas;
        this.clearCanvas(canvas);
        
        if(prevProps.company.company_id!==this.props.company.company_id && this.props.company.company_id == this.props.data.company_id){
            this.renderCanvas(canvas);
        }
    }

    render() {
        let company = this.props.data
        
        return (
            <div ref="companydetails" className={"company-details " + (this.isSelected() ? "selected":"")} id={"company-details-"+company.company_id}>
                <div className="company-canvas">
                    <canvas ref="canvas" id={"company-canvas-"+company.company_id}></canvas>
                </div>
                <div className="company-fade-in">
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
                    {this.props.data.description[0]}
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