import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import {add} from '../actions/trailListAction';

class TrailListForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trailName:''
            ,trailState:''
            ,city:''
            ,trailRating:''
            ,trailImage: ''
            ,description: ''
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        this.props.add({
            trailName: this.state.trailName
            ,trailState:this.state.trailState
            ,city:this.state.city
            ,trailRating:this.state.trailRating
            ,trailImage: this.state.trailImage
            ,description: this.state.description
        })
    }

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <Form>
                <h1>Submit A Trail</h1>
                    <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>Trail Name</ControlLabel>
                            <FormControl type="text" placeholder="Trail Name" name="trailName" value={this.state.trailName} onChange={this.onChange}/>
                        </FormGroup>
                    </div>

                    <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>State</ControlLabel>
                            <FormControl type="text" placeholder="State" name="trailState" value={this.state.trailState} onChange={this.onChange}/>
                        </FormGroup>
                    </div>
                    <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>City</ControlLabel>
                            <FormControl type="text" placeholder="City" name="city" value={this.state.city} onChange={this.onChange}/>
                        </FormGroup>
                    </div>

                    <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>Trail Rating</ControlLabel>
                            <FormControl type="text" placeholder="Trail Rating" name="trailRating" value={this.state.trailRating} onChange={this.onChange}/>
                        </FormGroup>
                    </div>

                        <div className="row">
                            <FormGroup className="col-lg-6">
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Trail Description" name="description" value={this.state.description} onChange={this.onChange}/>
                            </FormGroup>
                        </div>
                    <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>Trail Photos</ControlLabel>
                            <FormControl name="trailImage" placeholder="Add Url" value={this.state.trailImage} onChange={this.onChange}/>
                        </FormGroup>
                    </div>
                    <div className="row">
                    <FormGroup className="col-sm-1">
                        <Button type="button"
                         className="btn btn-primary"
                         onClick={this.onSubmit}
                         >Submit</Button>
                    </FormGroup>
                    </div>
                </Form>
            </div>
        </React.Fragment>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    add: data => dispatch(add(data))
})

export default connect(null, mapDispatchToProps)(TrailListForm);
