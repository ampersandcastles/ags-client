import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
// import { NavLink as RRNavLink } from 'react-router-dom';
// import { NavLink} from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import hopLogo from "../../assets/hopLogo.png";
import { Button } from 'reactstrap';
import Bagels from "../Products/Bagels";
import Bread from "../Products/Bread";
import Cookies from "../Products/Cookies";
import Muffins from "../Products/Muffins";
import Pastries from "../Products/Pastries";
import AllProducts from "../Products/AllProducts";

//!REACT ROUTER DOM + REACTSTRAP
const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

return (
        <div>
        <Navbar color="white" light>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            {/* <div classname="loginButton">
                <Button color="secondary">Login</Button>{' '}
            </div> */}
            <NavbarBrand>
            <div classname="logo">
                <a href="/">
                    <img id="hopLogo" src={hopLogo} alt="House of Pain" height="150px"/>
                </a>
            </div>
            </NavbarBrand>
            <Collapse isOpen={!collapsed} navbar>
            <Nav>     
                <div className="navbar">
                <div className="navbar-list-styling">
                    <ul className="navbar-list list-unstyled">
                        <li>
                            <Link to="../Products/Bagels">Bagels</Link>
                        </li>
                        <li>
                            <Link to="../Products/Bread">Bread</Link>
                        </li>
                        <li>
                            <Link to="../Products/Cookies">Cookies</Link>
                        </li>
                        <li>
                            <Link to="../Products/Muffins">Muffins</Link>
                        </li>
                        <li>
                            <Link to="../Products/Pastries">Pastries</Link>
                        </li>
                        <li>
                            <Link to="../Products/AllProducts">All Products</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-route">
                    <Switch>
                    <Route exact path="../Products/Bagels">
                        <Bagels />
                    </Route>
                    <Route exact path="../Products/Bread">
                        <Bread />
                    </Route>
                    <Route exact path="../Products/Cookies">
                        <Cookies />
                    </Route>
                    <Route exact path="../Products/Muffins">
                        <Muffins />
                    </Route>
                    <Route exact path="../Products/Pastries">
                        <Pastries />
                    </Route>
                    <Route exact path="../Products/AllProducts">
                        <AllProducts />
                    </Route>
                    </Switch>
                </div>
                </div>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );

//!Compiling but maybe not working REACTROUTER + REACTSTRAP
// return (
//         <div>
//         <Navbar color="white" light>
//             <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//             {/* <div classname="loginButton">
//                 <Button color="secondary">Login</Button>{' '}
//             </div> */}
//             <NavbarBrand>
//             <div classname="logo">
//                 <a href="/">
//                     <img id="hopLogo" src={hopLogo} alt="House of Pain" height="150px"/>
//                 </a>
//             </div>
//             </NavbarBrand>
//             <Collapse isOpen={!collapsed} navbar>
//             <Nav>     
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/Bagels" activeClassName="active">Bagels</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/Bread" activeClassName="active">Bread</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/Cookies" activeClassName="active">Cookies</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/Muffins" activeClassName="active">Muffins</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/Pastries" activeClassName="active">Pastries</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink tag={RRNavLink} exact to="./Products/AllProducts" activeClassName="active">All Products</NavLink>
//                 </NavItem>
//             </Nav>
//             </Collapse>
//         </Navbar>
//         </div>
//     );


// !Working Navbar w/Reactstrap
    // return (
    //     <div>
    //     <Navbar color="white" light>
    //         <NavbarToggler onClick={toggleNavbar} className="mr-2" />
    //         {/* <div classname="loginButton">
    //             <Button color="secondary">Login</Button>{' '}
    //         </div> */}
    //         <NavbarBrand>
    //         <div classname="logo">
    //             <a href="/">
    //             <img id="hopLogo" src={hopLogo} alt="House of Pain" height="150px"/>
    //         </a>
    //         </div>
    //         </NavbarBrand>
    //         <Collapse isOpen={!collapsed} navbar>
    //         <Nav>
    //             <div className="sidebar-list-styling">
    //                 <ul className="sidebar-list list-unstyled">     
    //             <NavItem>
    //                 <Link to="./Products/Bagels">Bagels</Link>
    //             </NavItem>
    //             {/* <NavItem>
    //                 <NavLink href="./Products/Bread">Bread</NavLink>
    //             </NavItem>
    //             <NavItem>
    //                 <NavLink href="./Products/Cookies">Cookies</NavLink>
    //             </NavItem>
    //             <NavItem>
    //                 <NavLink href="./Products/Muffins">Muffins</NavLink>
    //             </NavItem>
    //             <NavItem>
    //                 <NavLink href="./Products/Pastries">Pastries</NavLink>
    //             </NavItem>
    //             <NavItem>
    //                 <NavLink href="./Products/AllProducts">All Products</NavLink>
    //             </NavItem> */}
    //                 </ul>
    //             </div>

    //             <div className="sidebar-route">
    //                 <Switch>
    //                     <Route exact path="./Products/Bagels/DisplayBagels">
    //                         <Bagels />
    //                     </Route>
    //                 </Switch>
    //             </div>
    //         </Nav>
    //         </Collapse>
    //     </Navbar>
    //     </div>
    // );
}

export default Navigation;