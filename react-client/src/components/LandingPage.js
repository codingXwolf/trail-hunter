import React from 'react';

import { Button } from 'react-bootstrap';

class LandingPage extends React.Component {
onToForm = () => {
    this.props.history.push("./TrailListForm")
}

render() {
    return (
        <React.Fragment>
            <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div className="content">
                    <h1>Trail Hunter</h1>
                    <div>
                    </div>
                    <p className="major">Insert your favorite mountain bike trails!</p>
                    <ul className="actions stacked">
                        {/* <Button type="button" className="btn btn-primary buttonLanding" onClick={this.onToForm}>Vamonos Cabrones</Button> */}
                        <li><Button className="button big wide smooth-scroll-middle" onClick={this.onToForm}>Get Started</Button></li>
                    </ul>
                </div>
                <div className="image">
                    <img src="images/mtbwheelie.jpg" alt="" />
                </div>
            </section>
        </React.Fragment>      
    )
}
}
export default LandingPage;