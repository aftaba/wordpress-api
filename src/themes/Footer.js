import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Grid bsClass="container-fluid text-center light-bg">
                    <Row>
                        <div className="footer-section col-md-4 col-xs-12">
                            <h3><u>LOCATION</u></h3>
                            <p>Mesa, AZ 85202</p>
                            <p>Ph: +1(480) 616-1051 Room #1/3442-F, 1st Floor</p>
                            <p>Aiswarya Mansion, WestHill</p>
                            <p>Kanakalaya bank</p>
                            <p>Kozhikkode, Kerala</p>
                            <p>India - 673005</p>
                            <p>Ph: +91 495 4014118</p>
                        </div>
                        <div className="footer-section col-md-4 col-xs-12">
                            <h3><u>About</u></h3>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
                        </div>
                        <div className="footer-section col-md-4 col-xs-12">
                            <h3><u>Subscribe</u></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>
                    </Row>
                </Grid>
                
                <Grid bsClass="container-fluid text-center dark-bg">
                    <p> &copy; Copyright 2019. All right reserved. 
                        <Link to="http://www.reactjs.org" target="_blank">Build on ReactJS</Link>
                    </p>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
