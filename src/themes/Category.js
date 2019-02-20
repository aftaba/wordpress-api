import React, { Component, Fragment } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Archive from './Archive';


class Category extends Component {
    state = {
        slug : null, 
    }

    componentWillMount() {
        this.setState({ slug : this.props.match.params.slug });
    }
    
    render() {
        return (
            <Fragment>
                <Jumbotron>
                    <h1>Category : { this.state.slug } </h1>
                </Jumbotron>
                <Archive orderBy="date" paged="1" perPage="10" category={this.state.slug} />
            </Fragment>
        );
    }
}

export default Category;
