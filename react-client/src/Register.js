import React from 'react';
import {FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import { connect } from 'react-redux';


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
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("On change working")

    }

    onSubmit() {
        this.props.setFirstName(this.state.firstName)
    }


    render() {
        const formStyle = {
            margin:"0 auto"
            
        }

        return (
            <React.Fragment>
                <div className="container">
                    <Form style={formStyle}>
                    <h1>Register</h1>
                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl type="text" placeholder="Last Name" name="lastName"value={this.state.lastName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl type="text" placeholder="Username" name="userName" value={this.state.userName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Confirm Password</ControlLabel>
                                <FormControl type="password" placeholder="Confirm Password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <FormGroup>
                            <Button type="button"
                             className="btn btn-primary"
                             onClick={this.onSubmit}
                             >Sign in</Button>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>

        )
    }

}

function mapDispatchToProps(dispatch) {
    //set name is a made up name
    return {
        setFirstName: firstName => dispatch({type: 'SET_FIRST_NAME', firstName})
    };
}

export default connect(null, mapDispatchToProps)(RegisterForm);