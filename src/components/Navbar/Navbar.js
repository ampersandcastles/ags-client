import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import hopLogo from "../assets/hopLogo.png";


const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
        <Navbar color="white" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <NavbarBrand>
            <a href="/">
            <img id="hopLogo" src={hopLogo} alt="House of Pain" height="150px"/>
            </a>
            </NavbarBrand>
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink href="./products/bagels">Bagels</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./products/bread">Bread</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./products/cookies">Cookies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./products/muffins">Muffins</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./products/pastries">Pastries</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./products/all">All Products</NavLink>
                </NavItem>
                <NavItem>
                    <Button onClick={props.clickLogout}>Logout</Button>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default Navigation;