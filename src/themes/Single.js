import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Row  } from 'react-bootstrap';

class Single extends Component {
    state = {
        slug : null,
        post : null,
        error : null
    }

    componentWillMount(){
        this.setState({ slug : this.props.match.params.slug });
    }

    componentDidMount() {
        let slug = this.state.slug;
        document.title = slug;
        const post_api = `http://localhost/~aftaba/others/material-style/wp-json/better-rest-endpoints/v1/post/${slug}`;
        fetch( post_api )
        .then( response => response.json() )
        .then( data => this.setState({ post : data }) );
    }

    loadingContent() {
        return (
            <Fragment>
                Loading...
            </Fragment>
        )
    }
    
    displayContent() {
        return (
            <Fragment>
                <Row>
                    <h1 className="text-center">{this.state.post.title}</h1>
                    <div className="text-center">
                        <span> 
                            Category : <Link to="/category/">Category </Link>
                        </span> |
                        <span> Posted on : {this.state.post.date } </span> |
                        <span>
                            Posted by : <Link to={ '/author/'+ this.state.post.author }> {this.state.post.author } </Link>
                        </span>
                        
                    </div>
                    
                </Row>
                <hr />
                <Row>
                    <div dangerouslySetInnerHTML={{__html: this.state.post.content }} />
                </Row>
            </Fragment>
        );
    }

    render() {
        if ( this.state.post == null ) {
            return this.loadingContent();
        } else {
            return this.displayContent();
        }
        
      }
}

export default Single;
