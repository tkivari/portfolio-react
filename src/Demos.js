import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import DemoList from './components/demo_list';

class Demos extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                    {/* {this.renderDemoPanel()} */}
                    <DemoList />
                <Footer />
            </div>
        )
    }
}

export default Demos;