import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { add, update } from '../actions/trailListAction';

class TrailListForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trailName:''
            ,trailState:''
            ,city:''
            ,trailRating:''
            ,trailImage:''
            ,description:''
        }
        
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDropdownChange = this.onDropdownChange.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id && this.props.matchingTrail && this.props.matchingTrail.length > 0) {
            const trail = this.props.matchingTrail[0];
    
            this.setState({
                trailName:trail.trailName
                ,trailState:trail.trailState
                ,city:trail.city
                ,trailRating:trail.trailRating
                ,trailImage:trail.trailImage
                ,description:trail.description
            })
        }

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onDropdownChange(trailRating) {
        debugger;
        this.setState({ trailRating })
    }

    onSubmit() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.update({
                id: Number.parseFloat(id)
                , trailName: this.state.trailName
                , trailState: this.state.trailState
                , city: this.state.city
                , trailRating: this.state.trailRating
                , trailImage: this.state.trailImage
                , description: this.state.description
            })
        }
        else {
            this.props.add({
                trailName: this.state.trailName
                , trailState: this.state.trailState
                , city: this.state.city
                , trailRating: this.state.trailRating
                , trailImage: this.state.trailImage
                , description: this.state.description
            })
        }
        this.props.history.push("/TrailsList")
    }

    render() {
        const button = this.props.match.params.id
        ? <Button type="button"className="btn btn-primary"onClick={this.onSubmit}>Update</Button>
        : <Button type="button"className="btn btn-primary"onClick={this.onSubmit}>Submit</Button>

        return (
            <React.Fragment>
            <div className="container">
                <Form>
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

                    {/* <div className="row">
                        <FormGroup className="col-lg-6">
                            <ControlLabel>Trail Rating</ControlLabel>
                            <FormControl type="text" placeholder="Trail Rating" name="trailRating" value={this.state.trailRating} onChange={this.onChange}/>
                        </FormGroup>
                    </div> */}
                        <div className="field row">
                            <label>Trail Rating</label>
                            <select name="trailRating"
                            className="drop_style"
                            name="dropdown"
                            value={this.state.trailRating}
                            onChange={this.onDropdownChange}
                            options={this.state.options}
                            >
                                <option value="">- Category -</option>
                                <option value="1">Green</option>
                                <option value="2">Blue</option>
                                <option value="3">Blue Diamond</option>
                                <option value="4">Black Diamond</option>
                                <option value="5">Double Black Diamond</option>
                                <option value="6">Pro Line</option>
                            </select>
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
                        {button}
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
    ,update: data => dispatch(update(data))
})

const mapStateToProps = (state, ownProps) => ({
    matchingTrail: state.trailListReducer.filter(item => {
        return item.id === Number.parseInt(ownProps.match.params.id)
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailListForm);
