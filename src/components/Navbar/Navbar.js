import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import hopLogo from "../../assets/hopLogo.png";


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
                    <NavLink href="./components/Products/Bagels">Bagels</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Products/Bread">Bread</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Products/Cookies">Cookies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Products/Muffins">Muffins</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Products/Pastries">Pastries</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="./Products/AllProducts">All Products</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
}

export default Navigation;