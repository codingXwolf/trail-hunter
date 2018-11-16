import React from 'react';
import { connect } from 'react-redux';
import { userInfoAction } from '../actions/userInfoAction';

class Home extends React.Component {


    render() {
        debugger;
        console.log(this.props.userInfo)
        return (
            <React.Fragment>
                <div className="jumbotron">
                    <h1 className="display-3">Hello</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </React.Fragment>
        )
    }



}

const mapStateToProps = state => ({
        userInfo: state.userInfo
})

export default connect(mapStateToProps)(Home);