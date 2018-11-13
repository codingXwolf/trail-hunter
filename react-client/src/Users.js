import React from 'react';
import { connect } from 'react-redux';

class Users extends React.Component {
constructor(props) {
    super(props)

}

render() {
    return (
      <React.Fragment>
          <h1>Welcome {this.props.firstName}</h1>   
      </React.Fragment>
    )
}



}

function mapStateToProps(state) {
    return {
        firstName: state.firstName
    };
}

export default connect(mapStateToProps)(Users);