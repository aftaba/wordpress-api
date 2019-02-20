import React, { Component, Fragment } from 'react';
import BlogSection from '../themes/includes/BlogSection';
import {Row} from 'react-bootstrap';

const blog_url = 'http://localhost/~aftaba/others/material-style/wp-json/better-rest-endpoints/v1/posts';

class Archive extends Component {
    state = {
        filter : {
            orderBy : 'date',
            content : false,
            acf : false,
            media : false,
            category : '',
            author : 'root',
            perPage : 10
        },
        posts : [],
        error : null,
    }
    
    componentWillMount() {
        if ( this.props.author ) {
            this.setState( { filter : { author : this.props.author } });
        }
        if ( this.props.orderBy ) {
            this.setState( { filter : { orderBy : this.props.orderBy } });
        }
        if ( this.props.perPage ) {
            this.setState( { filter : { perPage : this.props.perPage } });
        }
    }
    
    componentDidMount() {
        let perPage = this.state.filter.perPage;
        let orderBy = this.state.filter.orderBy;
        let author = this.state.filter.author;
        let filter = `per_page=${perPage}`;

        let api_url = blog_url + '?' + filter;
        fetch( api_url )
        .then( response => response.json() )
        .then( data => this.setState({ posts : data }) );
    }

    render() {
        return (
            <Fragment>
                <Row>
                    { this.state.posts.map( ( post, index) => {
                        return (
                            <BlogSection key={index} slug={post.slug} category="" date="" tag="" permalink={post.permalink} title={post.title} >{post.excerpt}</BlogSection>
                        )})
                    }
                </Row>
            </Fragment>
            
        );
    }
}

export default Archive;
