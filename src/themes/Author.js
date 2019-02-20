import React, { Component, Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Archive from './Archive';

class Author extends Component {
  
    state = {
        author : null
    }

    componentWillMount() {
        this.setState({ author : this.props.match.params.nicename });
    }

    render() {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Post of Author : {this.state.author} </h1>
                </Jumbotron>
                <Archive orderBy="date" paged="1" perPage="10" author={this.state.author} />
            </Fragment>
    );
  }
}

export default Author;
