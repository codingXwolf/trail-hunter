import React from 'react';
import { FormControl, FormGroup, Button, ControlLabel, Form } from 'react-bootstrap';
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
        this.onHandleToLogin = this.onHandleToLogin.bind(this)
    }

    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        });
 
    }

    onSubmit() {
        this.props.setUserInfo(this.state)
        this.props.history.push("./Home")

    }

    onHandleToLogin() {
        this.props.history.push("./Login")
    }


    render() {
        const formStyle = {
            margin:"0 auto"
            
        }

        const state = this.state;

        return (
            <React.Fragment>
                <div className="container">
                    <Form style={formStyle}>
                    <h1>Register</h1>
                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text" placeholder="First Name" name="firstName" value={state.firstName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl type="text" placeholder="Last Name" name="lastName"value={state.lastName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email" name="email" value={state.email} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl type="text" placeholder="Username" name="userName" value={state.userName} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" name="password" value={state.password} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Confirm Password</ControlLabel>
                                <FormControl type="password" placeholder="Confirm Password" name="passwordConfirm" value={state.passwordConfirm} onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                        <FormGroup className="col-sm-1">
                            <Button type="button"
                             className="btn btn-primary"
                             onClick={this.onSubmit}
                             >Register</Button>
                        </FormGroup>
                        <FormGroup className="col-sm-1">
                            <Button type="button"
                             className="btn btn-primary"
                             onClick={this.onHandleToLogin}
                             >Login</Button>
                        </FormGroup>
                        </div>
                    </Form>
                </div>
            </React.Fragment>

        )
    }

}

const mapDispatchToProps = dispatch => ({
        setUserInfo: state => dispatch({type: 'SET_USER_INFO', state})
})

export default connect(null, mapDispatchToProps)(RegisterForm);