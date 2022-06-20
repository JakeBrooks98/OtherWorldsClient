
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css";

export const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const history = useHistory()

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    } 

    return (
        <div>
            <Navbar className="top-Nav" color="faded" light>
                <NavbarBrand href="/" className="OtherWorlds_brand">OtherWorlds</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/worldcatalog">World Catalog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/worldform">Create A World</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/myworlds">My Worlds</NavLink>
                        </NavItem>
                      
                        {
                            localStorage.getItem("auth_token") !== null ?
                              <button onClick={() => {
                                localStorage.removeItem("auth_token")
                                history.push({ pathname: "/" })
                              }}>
                                Logout
                              </button>
                              :
                              <>
                              <NavItem>
                                <NavLink to="/login">Login</NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink to="/register">Register</NavLink>
                              </NavItem>
                              </>
                          }

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}


