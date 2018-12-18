import React, { Component } from 'react';
import { FormControl, FormGroup, Button, ControlLabel, Form} from 'react-bootstrap';
import { connect } from 'react-redux';
import { add, update } from '../actions/trailListAction';

class TrailListForm extends Component {
        state = {
            trailName:''
            ,trailState:''
            ,city:''
            ,trailRating:{ value:'Select Rating'}
            ,trailImage:''
            ,description:''
        }

    componentDidMount = () => {
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

    onChange = e => { this.setState({ [e.target.name]: e.target.value}) }

    onDropdownChange = selectedOption => { this.setState({trailRating: selectedOption.target.value}) }

    onSubmit = () => {
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
        ? <Button type="button" className="btn btn-primary"onClick={this.onSubmit}>Update</Button>
        : <Button type="button" className="btn btn-primary"onClick={this.onSubmit}>Submit</Button>

        return (
            <React.Fragment>
                <section className="spotlight banner style1 orient-right content-align-left image-position-left onload-content-fade-in onload-image-fade-in" id="first">
                    <div className="content">
                        <Form>
                            <FormGroup>
                                <ControlLabel>Trail Name</ControlLabel>
                                    <FormControl type="text" placeholder="Trail Name" name="trailName" value={this.state.trailName} onChange={this.onChange} />
                            </FormGroup>
                            <p></p>
                            
                            <FormGroup>
                                <ControlLabel>State</ControlLabel>
                                <FormControl type="text" placeholder="State" name="trailState" value={this.state.trailState} onChange={this.onChange} />
                            </FormGroup>
                            <p></p>

                            <FormGroup>
                                <ControlLabel>City</ControlLabel>
                                <FormControl type="text" placeholder="City" name="city" value={this.state.city} onChange={this.onChange} />
                            </FormGroup>
                            <p></p>
                            
                            <FormGroup>
                                <ControlLabel>Trail Rating</ControlLabel>
                                <select name="trailRating"
                                    className="drop_style"
                                    value={this.state.trailRating.value}
                                    onChange={e => this.onDropdownChange(e)}
                                >
                                    <option value="">- Trail difficulty -</option>
                                    <option value="Green">Green</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black Diamond">Black Diamond</option>
                                    <option value="Double Black Diamond">Double Black Diamond</option>
                                    <option value="Pro Line">Pro Line</option>
                                </select>
                            </FormGroup>
                            <p></p>

                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <FormControl componentClass="textarea" placeholder="Trail Description" name="description" value={this.state.description} onChange={this.onChange} />
                            </FormGroup>
                            <p></p>
                            
                            <FormGroup>
                                <ControlLabel>Trail Photos</ControlLabel>
                                <FormControl name="trailImage" placeholder="Add Url" value={this.state.trailImage} onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup className="col-sm-1">
                                {button}
                            </FormGroup>
                        </Form>
                    </div>
                    <span className="image fit">
                        <img src="images/bannermtn.jpg" alt="" />
                    </span>
                </section>
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
