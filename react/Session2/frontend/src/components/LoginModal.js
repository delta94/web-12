import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Input, Label, FormGroup, Button } from 'reactstrap'

class LoginModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader>
                    LoginModal
                </ModalHeader>
                <ModalBody>
                    {this.renderBody()}
                </ModalBody>
            </Modal>
        );
    }

    state = {
        username: "",
        password: ""
    }
    
    login = () => {
        console.log(this.state);
    }

    renderBody() {
        return (
            <Form>
                <FormGroup>
                    <Label >Username</Label>
                    <Input onChange={(e) => this.setState({username: e.target.value})} placeholder="username..."/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="password..." />
                </FormGroup>
                <Button color="primary" onClick={this.login}>Login</Button>
            </Form>
        )
    }
}

export default LoginModal;