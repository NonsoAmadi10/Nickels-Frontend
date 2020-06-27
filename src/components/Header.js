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
import RegisterForm from '../components/auth/registerForm';

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //Login Modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  //Register Modal
  const [regmodal, setRegModal] = useState(false)
  const toggleRegModal = () => setRegModal(!regmodal)

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
              <NavLink onClick={toggleRegModal} className="m-1 btn btn-primary text-light btn-default">Register</NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggleModal} className="border-bottom-0"> Login</ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
      </Modal>

      <Modal isOpen={regmodal} toggle={toggle}>
        <ModalHeader toggle={toggleRegModal}> Create An Account</ModalHeader>
        <ModalBody>
          <RegisterForm />
        </ModalBody>
      </Modal>

    </div>
  );
}

export default Header;