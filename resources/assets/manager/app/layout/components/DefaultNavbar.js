import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    SidebarTrigger
} from './../../components';

import { NavbarUser } from './NavbarUser';

export const DefaultNavbar = () => (
    <Navbar light color="none" expand="xs">
        <Nav navbar>
            <NavItem className="mr-3">
                <SidebarTrigger/>
            </NavItem>
            <NavItem className="navbar-brand h5 mb-0 d-lg-none">
                <Link to="/">
                    <i className="fa fa-bandcamp fa-fw text-primary"></i>
                    <span className="h5 mb-0 fw-900 ml-2">spin</span>
                </Link>
            </NavItem>
            <NavItem className="d-none d-md-block">
                <span className="navbar-text">
                    <Link to="/">
                        <i className="fa fa-home"></i>
                    </Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    <Link to="/">Start</Link>
                </span>
                <span className="navbar-text px-2">
                    <i className="fa fa-angle-right"></i>
                </span>
                <span className="navbar-text">
                    Page Link
                </span>
            </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
            <NavbarUser className="ml-2" />
        </Nav>
    </Navbar>
);
