import React from 'react';

// Component generates UI Elements showing steps and Main features of Website
class Features extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (<section id="features-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="single-features">
                    <div className="feature-icon">
                            
                        <span className="et-icon icon-mobile"></span>
                    </div>
                    <h4>
                        STEP 1 : UPLOAD YOUR SELFIE
                    </h4>
                    <p>Upload high resolution selfie image.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-features">
                    <div className="feature-icon">
                        <i className="et-icon icon-gears"></i>
                    </div>
                    <h4>STEP 2 : WAIT FOR PROCESSING</h4>
                    <p>Image is processed using our state of the art image processing tool.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single-features">
                    <div className="feature-icon">
                        <i className="et-icon icon-browser"></i>
                    </div>
                    <h4>
                        STEP 3 : VIEW & DOWNLOAD YOUR 3D Model
                    </h4>
                    <p>3D model is generated. You can view or download the generated model.</p>
                </div>
            </div>
        </div>
    </div>
</section>
);
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Features;
