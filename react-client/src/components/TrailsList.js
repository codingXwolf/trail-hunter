import React, { Component } from 'react';
import TrailListForm from './TrailListForm';
import { connect } from 'react-redux';

class TrailsList extends Component {

render() {  
  const trailList = this.props.trailListReducer.map(item => {
      return  <div className="bs-component col-md-3" key={item.id}>
      <div className="card mb-3">
          <h3 className="card-header">{item.trailName}</h3>
          <div className="card-body">
              <h5 className="card-title">{item.state}</h5>
              <h5 className="card-subtitle">{item.city}</h5>
              <h6 className="card-subtitle text-muted">{item.trailRating}</h6>
          </div>
          <img style={{ height: "200px", width: "100%", display: "block" }} src={item.trailImage} alt="https://ubisafe.org/images/bilking-clipart-down-hill.jpg" />
          <div className="card-body">
              <p className="card-text">{item.description}</p>
          </div>
          <div className="card-footer text-muted">
              2 days ago
          </div>
      </div>
  </div>
  })
    return (
        <React.Fragment>
            {/* <h1>Trail List</h1> */}
           
            <div className="container">
            <TrailListForm/>
                <div className="row">
                    {trailList}
                </div>
            </div>
        </React.Fragment>
    )
}

}

const mapStateToProps = state => ({
    trailListReducer: state.trailListReducer
})

export default connect(mapStateToProps)(TrailsList);