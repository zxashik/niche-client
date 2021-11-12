import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <span className='green-color'>Sunrayes</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link to="/home"><span className="text-white">Home</span></Nav.Link>

                        <Nav.Link to="/products"><span className="text-white">Products</span></Nav.Link>


                        {
                            user?.email ?
                                <>

                                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">Dashboard</Link>
                                    <span className="mx-2"><Button onClick={logout} variant="light"> Logout </Button></span></>
                                :
                                <NavLink to="/login">
                                    <span className="mx-2">
                                        <Button variant="light"> Login </Button>
                                    </span>
                                </NavLink>
                        }






                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;