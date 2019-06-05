import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        	<footer id="footer-area">
		<div className="container">
			<div className="copyright-area">
				<div className="row">
					<div className="col-md-12">
						<h2>PSUCompBio</h2>
						<p>&copy; Copyright 2019 - All rights reserved <a href="#">PSUCompBio.com</a></p>
						<div className="footer-social">
							<ul>
								<li><a href="#"><i className="social-icon ion-social-facebook"></i></a></li>
								<li><a href="#"><i className="social-icon ion-social-twitter"></i></a></li>
								<li><a href="#"><i className="social-icon ion-social-pinterest"></i></a></li>
								<li><a href="#"><i className="social-icon ion-social-googleplus"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Footer;
