import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <section id="contact-area" data-scroll-index="7">
		<div className="container z-index">
			<div className="row">
				<div className="col-md-4">
					<div className="single-contact-text">
						<h4>Email</h4>
						<p>yourname@gmail.com</p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="single-contact-text">
						<h4>Phone</h4>
						<p>012 3456 7893</p>
					</div>
				</div>
				<div className="col-md-4">
					<div className="single-contact-text">
						<h4>Address</h4>
						<p>12/34 Street ABC</p>
					</div>
				</div>
			</div>

			<div className="contact-form">
				<div className="row">
					<div className="col-md-6">
						<form action="#">
							<input type="text" name="name" placeholder="Name"/>
							<input type="email" name="email" placeholder="Email"/>
							<textarea name="msg" id="msg" placeholder="Message" ></textarea>
							<button className="submit-icon" type="submit">
								SEND
								<i className="submit-icon ion-paper-airplane"></i>
							</button>
						</form>
					</div>
					<div className="col-md-6">
						<div id="map"></div>
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

export default Contact;
