import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactSelect from 'react-select';
import { FormGroup, Button } from 'react-bootstrap';

class TrailsList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
        this.onEdit = this.onEdit.bind(this)
    }

    onEdit(id) {
        this.props.history.push("./TrailListForm/" + id)
    }

 

render() {  
  const trailList = this.props.trailListReducer.map(item => {
      return  <div className="bs-component col-md-3" key={item.id}>
          <div className="card mb-3">
              <h3 className="card-header">{item.trailName}</h3>
              <div className="card-body">
                  <h5 className="card-title">{item.trailState}</h5>
                  <h5 className="card-subtitle">{item.city}</h5>
                  <h6 className="card-subtitle text-muted">{item.trailRating}</h6>
              </div>
              <img style={{ height: "200px", width: "100%", display: "block" }} src={item.trailImage} alt="https://ubisafe.org/images/bilking-clipart-down-hill.jpg" />
              <div className="card-body">
                  <p className="card-text">{item.description}</p>
              </div>
              <FormGroup className="col-sm-6">
                  <Button type="button"
                      className="btn btn-info"
                      onClick={e => this.onEdit(item.id, e)}
                  >Edit</Button>
              </FormGroup>
              <FormGroup className="col-sm-6">
                  <Button type="button"
                      className="btn btn-danger"
                    //   onClick={e => this.onDelete(item.id, e)}
                  >Delete</Button>
              </FormGroup>
          </div>
  </div>
  })
    return (
        <React.Fragment>           
            <div className="container">
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