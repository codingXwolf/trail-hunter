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
        <img style={{ height: "190px", width: "100%", display: "block" }} src={item.trailImage} alt="https://ubisafe.org/images/bilking-clipart-down-hill.jpg" />
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
								<section><div className="inner">
									<span className="icon style2 major fa-save"></span>
									<h3>Two</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-bar-chart"></span>
									<h3>Three</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-wifi"></span>
									<h3>Four</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-cog"></span>
									<h3>Five</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-paper-plane"></span>
									<h3>Six</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-desktop"></span>
									<h3>Seven</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-refresh"></span>
									<h3>Eight</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-hashtag"></span>
									<h3>Nine</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-bolt"></span>
									<h3>Ten</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
								<section><div className="inner">
									<span className="icon style2 major fa-envelope"></span>
									<h3>Eleven</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
								</div></section>
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