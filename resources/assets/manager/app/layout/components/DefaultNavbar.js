import React from 'react';
import { Link } from 'react-router-dom';

import {
    Navbar,
    Nav,
    NavItem,
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledButtonDropdown,
    CardBody,
    SidebarTrigger
} from './../../components';

import { NavbarActivityFeed } from './NavbarActivityFeed';
import { NavbarMessages } from './NavbarMessages';
import { NavbarUser } from './NavbarUser';
import Avatar from "../../components/Avatar";
import {randomAvatar} from "../../utilities";

export const DefaultNavbar = () => (
    <Navbar style={{ display: 'flex', WebkitJustifyContent: 'flex-end' }} dark color="light-08" expand="xs">
        <Nav navbar className="mr-1">
            <Button className="mr-2" color="primary">Добавить новость</Button>{' '}
            <Button color="warning">Добавить заметку</Button>{' '}
        </Nav>
        <Nav navbar className="mr-1">
            <NavbarActivityFeed style={{ fontSize: 'large' }} />
        </Nav>
        <Nav navbar className="ml-3">
            <UncontrolledButtonDropdown>
                <DropdownToggle caret color="secondary" outline style={{ verticalAlign: 'middle' }}>
                    <Avatar.Image
                        size="md"
                        src={ randomAvatar() }
                        className="mr-2"
                    />
                    <span>Ivan Bastryhin</span>
                </DropdownToggle>
                <DropdownMenu persist>
                    <Link to="" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            <i className="fa fa-fw fa-user mr-2"></i>
                            Profile
                        </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <Link to="" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            <i className="fa fa-fw fa-sign-out mr-2"></i>
                            Logout
                        </DropdownItem>
                    </Link>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Nav>
        {/*<Nav navbar className="ml-auto">
            <NavbarActivityFeed />
            <NavbarMessages className="ml-2" />
            <NavbarUser className="ml-2" />
        </Nav>*/}
    </Navbar>
);
