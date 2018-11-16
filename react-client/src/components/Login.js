import React from 'react';
import {FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import { connect } from 'react-redux';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: {
            firstName: ''
            ,lastName: ''
            ,email: ''
            ,userName: ''
            ,password: ''
            ,passwordConfirm: ''
            }
        }
    
    }


    render() {
        const formStyle = {
            margin:"0 auto"
            
        }

        return (
            <React.Fragment>
                <div className="container">
                    <Form style={formStyle}>
                    <h1>Login</h1>
                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email" name="email" onChange={this.onChange}/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" name="password"  onChange={this.onChange}/>
                            </FormGroup>
                        </div>
                        <FormGroup className="col-sm-1">
                            <Button type="button"
                             className="btn btn-primary"
                            //  onClick={this.onHandleToLogin}
                             >Login</Button>
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

export default connect(null, mapDispatchToProps)(Login);