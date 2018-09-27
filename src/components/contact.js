import React, {Component} from 'react';
import ReactGA from 'react-ga';

class ContactForm extends Component {
    render() {
        // Google Analytics
        ReactGA.initialize('UA-32604842-12');
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <div className="contact-form">
                <h2>Contact Me</h2>
                Thanks for viewing my portfolio! I am currently <strong>available</strong> for contract work and I'm always interested in hearing about new opportunities!<br/><br/>
                Email me anytime at <a href="mailto:ty.kivari@gmail.com">ty.kivari@gmail.com</a>
            </div>
        );  
    }
}

export default ContactForm;