import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { del } from '../actions/trailListAction';

class TrailsList extends React.Component {
    onEdit = id => {
        this.props.history.push("./TrailListForm/" + id)
    }

    onToForm = () => {
        this.props.history.push("./TrailListForm")
    }

render() {
    const iconStyle = {height: "40px", width: "15%"} 

    const trailList = this.props.trailListReducer.map(item => {
        return <section key={item.id}>
        <div className="inner">
            <h3>{item.trailName}</h3>
            <h4>{item.city}</h4>
            <img style={iconStyle} alt="some text"
                src={item.trailRating === "Green" ? "images/greencircle.png" : "" ||
                    item.trailRating === "Blue" ? "images/bluesquare.png" : "" ||
                        item.trailRating === "Black Diamond" ? "images/singleblackdiamond.png" : "" ||
                            item.trailRating === "Double Black Diamond" ? "images/doubleblackdiamondpng.png" : "" ||
                                item.trailRating === "Pro Line" ? "images/proline.png" : ""} />
            <p>{item.trailRating}</p>
            <img style={{ height: "190px", width: "100%", display: "block" }} alt="some text" src={item.trailImage ? item.trailImage : "images/huskydh.jpg"} />
            {/*random image address https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkLYIYFJY8oILxveKLn8OA7xz9I8vJ7q0Lcq2f0g6Hdg0zQfH */}
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
            <section className="wrapper style1 align-center medium onload-fade-in">
						<div className="inner">
							<h2>Mountain Bike Trail List</h2>
                            <Button onClick={this.onToForm}>Add Trail</Button>
							<div className="items style1 medium onload-fade-in">
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