import React, { Component } from 'react';
import Zoomer from 'react-zoomer';
import Header from '../header';
import Footer from '../footer';

class ZoomerDemo extends Component {
    render() {
        let image = "/images/demos/buddhist.jpg";
        let settings = {
            minZoom: 0.5,
            maxZoom: 4,
            width: "100%",
            height: "500px",
        }

        let style = {
            position: "relative",
            width: "100%",
            height: "500px",
            display: "block",
            background: "#ccc",
            margin: "0 auto"
        }

        let contentStyle = {
            flex: 1,
            background: "#eee",
        }

        let descriptionStyle = {
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            lineHeight: "24px"
             
        }
        return (
            <div className="App">
                <Header />
                    <div style={contentStyle}>
                        <div style={descriptionStyle}>
                        <h2>React Zoomer</h2>
                        The React Zoomer component is an easy-to-install React Component based loosely on a user input tool I built for <a href="https://www.checkout51.com" target="_blank">Checkout 51</a>.
                        <br/><br/>The component can be found in the <a href="https://www.npmjs.com/package/react-zoomer" target="_blank">NPM Repository</a>.
                        <br/>The code can be found <a href="https://github.com/tkivari/react-zoomer" target="_blank">on Github</a>.
                        </div>
                        <div className="zoomer-demo" style={style}>
                            <Zoomer image={image} settings={settings} />
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default ZoomerDemo;