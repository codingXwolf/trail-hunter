import React from 'react';
import {FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';


class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: ''
            ,lastName: ''
            ,email: ''
            ,userName: ''
            ,password: ''
            ,passwordConfirm: ''
        }
        //bind
    }


    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1>Register</h1>
                    <Form>
                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text" placeholder="First Name" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl type="text" placeholder="Last Name" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl type="text" placeholder="Username" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" />
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-4">
                                <ControlLabel>Confirm Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" />
                            </FormGroup>
                        </div>

                        <FormGroup>
                            <Button type="button" className="btn btn-primary">Sign in</Button>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>

        )
    }

}

export default RegisterForm;