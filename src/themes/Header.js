import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Headless WP</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/about">About</Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to="/blogs">Blogs</Link>
                        </NavItem>
                        <NavItem eventKey={4} href="/404">
                            404
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
