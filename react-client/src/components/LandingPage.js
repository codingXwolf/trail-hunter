import React from 'react';

import { Button } from 'react-bootstrap';

class LandingPage extends React.Component {
    constructor(props){
        super(props)

        this.onToForm = this.onToForm.bind(this);
    }
onToForm() {
    this.props.history.push("./TrailListForm")
}

render() {
    return (
        <React.Fragment>
                <div className="content">
                    <h1>Trail Hunter</h1>
                    <div>
                    </div>
                    <p className="major">Insert your favorite mountain bike trails!</p>
                    <ul className="actions stacked">
                    {/* <Button type="button" className="btn btn-primary buttonLanding" onClick={this.onToForm}>Vamonos Cabrones</Button> */}
					<li><a href="#first" className="button big wide smooth-scroll-middle" onClick={this.onToForm}>Get Started</a></li>
                    </ul>
                </div>
                <div className="image">
                    <img src="images/mtbwheelie.jpg" alt="" />
                </div>
        </React.Fragment>      
    )
}
}
export default LandingPage;