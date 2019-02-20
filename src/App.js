import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import Index from './themes/Index';
import Header from './themes/Header';
import Footer from './themes/Footer';
import Single from './themes/Single';
import Page from './themes/Page';
import NotFound from './themes/NotFound';
import Archive from './themes/Archive';
import Author from './themes/Author';
import Category from './themes/Category';
import Tag from './themes/Tag';
import Search from './themes/Search';
import Widgets from './widgets/Widgets';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Grid>
                        <Row>
                            <Col className="col-md-8">
                                <Route exact path="/" component={Index} />
                                <Route exact path="/blog/:slug" component={Single} />
                                <Route exact path="/page/:slug" component={Page} />
                                <Route exact path="/blogs/" component={Archive} />
                                
                                <Route exact path="/search/:term" component={Search} />
                                
                                <Route exact path="/author/:nicename" component={Author} />
                                <Route exact path="/category/:slug" component={Category} />
                                <Route exact path="/tag/:slug" component={Tag} />
                                <Route exact path="/404" component={NotFound} />
                            </Col>
                            <Col className="col-md-4">
                                <Widgets />
                            </Col>
                        </Row>
                    </Grid>
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

export default App;
