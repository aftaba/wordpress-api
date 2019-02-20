import React, { Component, Fragment } from 'react';
import Archive from './Archive';
import { Jumbotron } from 'react-bootstrap';

class Tag extends Component {
    render() {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Tag :  </h1>
                </Jumbotron>
                <Archive orderBy="date" paged="1" perPage="10" />
            </Fragment>
        );
    }
}

export default Tag;
