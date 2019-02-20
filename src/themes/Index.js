import React, { Component, Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Archive from './Archive';

class Index extends Component {
  render() {
    return (
        <Fragment>
            <Jumbotron>
                <h1>Welcome to Wordpress Headless </h1>
                <p> We are using react, react-router, react-cli </p>
            </Jumbotron>
            <Archive orderBy="date" paged="1" perPage="5" />
        </Fragment>
    );
  }
}

export default Index;
