import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function Balance() {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <div style={{ margin: '1rem', backgroundColor: "#fff", padding: '3rem', boxShadow: "1px 7px 8px 8px rgba(240,237,240,1)", borderRadius: "8px", color: "#0F8608" }}>
            <p className="text-muted">Available Balance:</p>
            <Box>

                <p className="font-weight-bolder h3">$14,0000</p>
                <button className="btn btn-group-lg btn-outline-danger" onClick={toggle}> Send Money </button>

            </Box>


            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}


const Box = styled.div`
width: 100%;
display: flex;
justify-content: space-between; 

@media(max-width: 600px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
};



`

export default Balance;