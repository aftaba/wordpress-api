import React, { Component, Fragment } from 'react';
import SearchWidget from './SearchWidget';
import RecentPostsWidget from './RecentPostsWidget';
import CategoriesWidget from './CategoriesWidget';

class Widgets extends Component {
    render() {
        return (
            <Fragment>
                <SearchWidget />
                <RecentPostsWidget />
                <CategoriesWidget />
            </Fragment>
        );
    }
}

export default Widgets;
