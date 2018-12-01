import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactSelect from 'react-select';
import { Button } from 'react-bootstrap';
import { del } from '../actions/trailListAction';


class TrailsList extends Component {
    constructor(props){
        super(props)
        
        this.onEdit = this.onEdit.bind(this)
        this.onToForm = this.onToForm.bind(this)
    }

    onEdit(id) {
        this.props.history.push("./TrailListForm/" + id)
    }

    onToForm() {
        this.props.history.push("./TrailListForm")
    }


render() {  
    const trailList = this.props.trailListReducer.map(item => {
        return 	<section key={item.id}><div className="inner">
        <h3>{item.trailName}</h3>
        <h4>{item.city}</h4>
        <span className="icon style2 major fa-diamond"><p></p>{item.trailRating}</span>
        <img style={{ height: "190px", width: "100%", display: "block" }} src={item.trailImage} alt="images/mtbwheelie.jpg" />
        <p>{item.description}</p>
                   <Button type="button"
                       className="button primary small"
                       onClick={e => this.onEdit(item.id, e)}
                   >Edit</Button>
                   <Button type="button"
                       className="button primary small"
                       onClick={e => this.props.del(item.id, e)}
                   >Delete</Button>
    </div></section>
    })
    return (
        <React.Fragment>           
            <section className="wrapper style1 align-center">
						<div className="inner">
							<h2>Mountain Bike Trail List</h2>
                            <Button onClick={this.onToForm}>Add Trail</Button>
							<div className="items style1 medium onscroll-fade-in">
								{trailList}
							</div>
						</div>
					</section>
        </React.Fragment>
    )
}

}

const mapStateToProps = state => ({
    trailListReducer: state.trailListReducer
})

const mapDispatchToProps = dispatch => ({
    del: id => dispatch(del(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrailsList);