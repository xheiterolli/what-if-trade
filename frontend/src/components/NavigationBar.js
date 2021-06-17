import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #01b96b;
        height: 70px;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #fff;
        font-weight: bold;
        font-size: xx-large;
        transition: 0.4s;


        &:hover {
            color: #293250;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/" style={{marginLeft: "3%"}}> What-If Trade </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"> </Navbar.Collapse>
            <Nav className="ml-auto" style={{marginRight: "3%"}}>
                {/* <Nav.Item> <Nav.Link href="/"> Home </Nav.Link> </Nav.Item> */}
                <Nav.Item> <Nav.Link href="/about"> About Me </Nav.Link> </Nav.Item>
            </Nav>
        </Navbar>
    </Styles>
)