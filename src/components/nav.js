import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand style={{ color: 'white', fontSize: '2rem', letterSpacing: '10px' }} href="/">DALIGRAM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/profiles" style={{ fontSize: '1.2rem' }}>Profiles</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/" style={{ fontSize: '1.2rem' }}>Posts</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/posts/new" style={{ fontSize: '1.2rem' }}>New Post</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
