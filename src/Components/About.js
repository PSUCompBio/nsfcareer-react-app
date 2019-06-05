import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        	
	<section id="about-us-section" data-scroll-index="1">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="aboutus-text">
						<h3>About Us</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rerum, facere hic harum, voluptatem veritatis iure blanditiis sequi cupiditate dolore cum a tenetur incidunt non.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rerum, facere hic harum, voluptatem veritatis iure blanditiis sequi cupiditate dolore cum a tenetur incidunt non.
						Lorem ipsum dolor sit amet.</p>
						<a className="about-btn" href="#">Learn more</a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="about-img">
						<svg width="530" height="360">
						    <defs>
						        <clipPath id="polygonView">
						            <polygon fill="#fff" points="0 0, 1000 0, 1000 1000, 150 1000"></polygon>
						        </clipPath>
						    </defs>
							<image width="530" height="360" href="img/about-us/front-img.jpg" clipPath="url(#polygonView)" />

						 </svg>
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

export default About;
