import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class BlogSection extends Component {  
    render() {
        return (
            <div class="row">
                <h1>{this.props.title}</h1>
                <p>{this.props.children}</p>
                <Link className='btn btn-primary' to={'/blog/'+this.props.slug}>Read More</Link>
            </div>
        );
      }
}

export default BlogSection;
