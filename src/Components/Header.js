
import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (

	// Header-area
	<header id="header-area" data-scroll-index="0" className="header-img-bg">

<div id="particles-js"></div>

{/* <!-- header-navigation --> */}
<div className="container z-index">
    <nav id="navbar-header" className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="index.html">My React App</a>
        <button className="responsive-nav-btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ion-navicon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-right">
                <li className="nav-item active">
                    <a className="nav-link" data-scroll-nav="0" href="#header-area">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-scroll-nav="1" href="#about-us-section">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-scroll-nav="2" href="#portfolio-area">Portfolio</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" data-scroll-nav="3" href="#service-area">Service</a>
                </li>  */}

                <li className="nav-item">
                    <a className="nav-link" data-scroll-nav="7" href="#contact-area">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</div>

<div className="header-bottom">
    <div className="container">
        <div className="row">
            <div style={{display : "block"}} className="owl-carousel owl-slider">
                <div className="col-md-8 item">
                    <h2>Selfie to 3d Modeling</h2>
                    <p>Transforms, Optimizes, and Intelligently convert your selfie into 3d Models</p>
                    <a href="#" className="h-btn">See more</a>
                </div>

            </div>
        </div>
    </div>
</div>

</header>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Header;
