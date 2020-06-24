import React, { useState } from 'react';
import './Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';

import LoginForm from '../components/auth/LoginForm'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand href="/" className="brand"> Nickels </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={toggleModal} className="m-1 btn btn-outline-info ">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="m-1 btn btn-primary text-light btn-default">Register</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggleModal} className="border-bottom-0"> Login</ModalHeader>
        <ModalBody>
          <LoginForm className="w-100 h-50" />
        </ModalBody>
      </Modal>

    </div>
  );
}

export default Header;