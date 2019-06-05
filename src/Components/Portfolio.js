import React from 'react';

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <section id="portfolio-area" data-scroll-index="2">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="section-heading">
						<h2>Our <span className="section-heading-style">Work</span></h2>
						<p>We design experiences.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row gallery">
				<div className="col-lg-4 col-md-6" data-tag='pink'>
					<div className="single-portfolio">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6" data-tag='red'>
					<div className="single-portfolio filtr-item">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6" data-tag='blue'>
					<div className="single-portfolio filtr-item">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6" data-tag='green'>
					<div className="single-portfolio filtr-item">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>

						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6" data-tag='blue'>
					<div className="single-portfolio filtr-item">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6" data-tag='pink'>
					<div className="single-portfolio filtr-item">
						<img src="img/portfolio/1.jpg" alt="Portfolio"/>
						<div className="overlay-social-media">
							<ul>
								<li><a href="img/portfolio/1.jpg"><i className="ion-search"></i></a></li>
							</ul>
							<p>IMAGE TITLE</p>
						</div>
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

export default Portfolio;
