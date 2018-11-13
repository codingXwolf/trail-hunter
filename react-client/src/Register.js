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
            <h1>Register</h1>
            <Form horizontal>
            <FormGroup >
                        First Name
                    <br/>
                        <FormControl type="text" placeholder="First Name" />
                </FormGroup>
                <FormGroup >
                        Last Name
                        <br/>
                        <FormControl type="text" placeholder="Last Name" />
                </FormGroup>
                <FormGroup >
                        Email
                        <br/>
                        <FormControl type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup >
                        Username
                        <br/>
                        <FormControl type="text" placeholder="Username" />
                </FormGroup>

                <FormGroup >
                        Password
                        <br/>
                        <FormControl type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup >
                        Confirm Password
                        <br/>
                        <FormControl type="password" placeholder="Password" />
                </FormGroup>

                <FormGroup>
                        <Button type="button" className="btn btn-primary">Sign in</Button>
                </FormGroup>
            </Form>
        </React.Fragment>

    )
}

}

export default RegisterForm;