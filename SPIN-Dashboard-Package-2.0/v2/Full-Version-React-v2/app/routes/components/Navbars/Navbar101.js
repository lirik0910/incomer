import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Navbar, 
    Nav, 
    DropdownToggle,
    NavLink,
    UncontrolledDropdown,
    Avatar, 
    AvatarAddOn 
} from './../../../components';
import { randomAvatar } from './../../../utilities';


import { NavbarActivityFeed } from
    './../../../layout/components/NavbarActivityFeed';
import { NavbarMessages } from
    './../../../layout/components/NavbarMessages';
import { NavbarUser } from
    './../../../layout/components/NavbarUser';
import { DropdownProfile } from
    '../Dropdowns/DropdownProfile';

import { LogoNavbar } from
    '../Logos/LogoNavbar';
import { LogotypeNavbar } from
    '../Logos/LogotypeNavbar';
import { SwitchVersion } from
    '../Dropdowns/SwitchVersion';

const Navbar101 = () => (
<React.Fragment>
    { /* START Navbar */}
    <Navbar color="black" dark expand className="mb-3">
        { /* START Navbar: Left Side */}
        <Nav>
            { /* START Logo */}
            <NavLink tag={ Link } to="/" className="align-self-center pr-0 pl-0">
                <LogoNavbar />
            </NavLink>
            { /* END Logo */}
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="py-0">
                    <LogotypeNavbar 
                        logoH="h6"
                    />
                </DropdownToggle>
                <SwitchVersion />
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
        </Nav>
        { /* END Navbar: Left Side */}
        { /* START Navbar: Right Side */}
        <Nav className="ml-auto" navbar>
            <NavbarMessages className="ml-1" />
            <NavbarActivityFeed className="ml-1" />
            { /* START Navbar: Dropdown */}
            <UncontrolledDropdown nav inNavbar className="ml-1">
                <DropdownToggle nav>
                    <Avatar.Image
                        size="sm"
                        src={ randomAvatar() }
                        addOns={[
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="black"
                                key="avatar-icon-bg"
                            />,
                            <AvatarAddOn.Icon 
                                className="fa fa-circle"
                                color="danger"
                                key="avatar-icon-fg"
                            />
                        ]}
                    /> 
                </DropdownToggle>
                <DropdownProfile  
                    right  
                />
            </UncontrolledDropdown>
            { /* END Navbar: Dropdown */}
            <NavbarUser className="ml-1" />
        </Nav>
        { /* END Navbar: Right Side */}
    </Navbar>
    { /* END Navbar */}
</React.Fragment>
)


export { Navbar101 };
